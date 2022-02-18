import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Users } from '../../entities/Users';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        {
          id: 1,
          name: '임우찬',
          age: 24,
        },
      ])
      .execute();
  }
}
