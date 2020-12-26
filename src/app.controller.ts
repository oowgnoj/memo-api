import { UnauthorizedException, Body, Controller, Post } from '@nestjs/common';
import { IResponseToken } from './app.interface';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './user/dto/create-user.dto';
import { LoginUserDto } from './user/dto/login-user.dto';
import { UserService } from './user/users.service';

@Controller()
export class AppController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/signin')
  signin(@Body() payload: CreateUserDto): Promise<String> {
    return this.userService.create(payload);
  }

  @Post('/login')
  login(
    @Body() payload: LoginUserDto,
  ): Promise<IResponseToken | UnauthorizedException> {
    return this.authService.login(payload);
  }
}
