import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { User } from 'src/user/model/user.model';
import { UserService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, candidatePassword: string): Promise<User> {
    const user = await this.userService.findOne(email);
    const isVlidatePassword = await user.comparePassword(candidatePassword);

    if (user && isVlidatePassword) {
      const { password, ...result } = user.dataValues;
      return result;
    }
    return null;
  }

  async login(user: LoginUserDto) {
    const { email, password } = user;
    const authenticatedUser = await this.validateUser(email, password);

    if (!authenticatedUser)
      return new UnauthorizedException('로그인 정보를 확인해 주세요');

    const payload = {
      userId: authenticatedUser.id,
      email: authenticatedUser.email,
    };

    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
