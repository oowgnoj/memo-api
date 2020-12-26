import { Sequelize } from 'sequelize-typescript';
import * as mysql from 'mysql2';
import { databaseConfig } from './database.config';
import { User } from 'src/user/model/user.model';
import { Memo } from 'src/memo/model/memo.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      try {
        const sequelize = new Sequelize(databaseConfig);
        sequelize.addModels([User, Memo]);
        await sequelize.sync();
        return sequelize;
      } catch (error) {
        // IF DATABASE NOT EXIST, CREATE NEW DATABASE
        console.error(error);
        const connection = mysql.createConnection({
          host: databaseConfig.host,
          user: databaseConfig.username,
          password: databaseConfig.password,
        });
        connection.query(`CREATE DATABASE ${databaseConfig.database}`);
        return databaseProviders[0].useFactory();
      }
    },
  },
];
