import { Module } from '@nestjs/common';
import { databaseConfig } from './database.config';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
