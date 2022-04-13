import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { User } from './src/entities/User';
import * as dotenv from 'dotenv';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //   entities: [User],
  synchronize: false, // synchronize:true 이건 개발환경일때만 하자. (개발환경에서 디비 만들어서 올리는 케이스만 사용.)
  migrations: [__dirname + '/src/migrations/*ts'],
  //   cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  logging: true,
  keepConnectionAlive: true,
};

export = config;
