import { Sequelize } from 'sequelize-typescript';
import * as mysql from 'mysql2';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      try {
        const sequelize = new Sequelize(databaseConfig);
        sequelize.addModels([]);
        await sequelize.sync();
        return sequelize;
      } catch (error) {
        // IF DATABASE NOT EXIST, CREATE NEW DATABASE
        const connection = mysql.createConnection({
          host: databaseConfig.host,
          user: databaseConfig.username,
        });
        connection.query('CREATE DATABASE memo');
        return databaseProviders[0].useFactory();
      }
    },
  },
];
