import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import * as Bcrypt from 'bcryptjs';
import { USER_REPOSITORY } from 'src/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async findOne(email): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });

    return user;
  }

  async create(payload: CreateUserDto): Promise<String> {
    const user = await this.findOne(payload.email);
    if (user)
      throw new NotAcceptableException(`${payload.email}은 이미 사용중입니다`);
    await this.userRepository.create(payload);
    return 'OK';
  }
}
