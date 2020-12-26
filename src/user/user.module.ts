import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { usersProviders } from './users.providers';
@Module({
  providers: [UserService, ...usersProviders],
  exports: [UserService],
})
export class UserModule {}
