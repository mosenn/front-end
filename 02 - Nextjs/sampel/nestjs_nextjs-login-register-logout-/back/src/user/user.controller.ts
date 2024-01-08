import {
  Body,
  Controller,
  Post,
  Get,
  Response,
  Request,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/login')
  singin(@Body() body: LoginUserDto, @Request() req, @Response() res) {
    return this.userService.login(body, req, res);
    // return "user is here"
  }
  @Post('/register')
  singup(@Body() body: CreateUserDto) {
    return this.userService.singup(body);
  }

  @Get('profile')
  async getUserProfile(@Req() req) {
    const token = req.headers.authorization.replace('Bearer ', '');
    const userProfile =
      await this.userService.verifyTokenAndGetUserProfile(token);
    return userProfile;
  }
  // logout is control front-end with localstroge
}
