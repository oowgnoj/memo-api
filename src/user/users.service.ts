import { Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async findOne(email): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email: email },
      plain: true,
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
