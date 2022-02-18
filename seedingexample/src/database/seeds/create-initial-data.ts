import faker from '@faker-js/faker';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Users } from '../../entities/Users';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data = [];
    for (let i = 14; i < 27; i++) {
      data.push({
        id: i,
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 50),
      });
    }
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values(data)
      .execute();
  }
}
