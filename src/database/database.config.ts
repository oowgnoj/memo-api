import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './database.interface';
dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  dialect: 'mysql',
  port: 3306,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};
