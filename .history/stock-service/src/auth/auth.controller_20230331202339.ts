import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import CreateUserDto  from '../dto/create-user.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @Post('signup')
  async singup(@Body() user: CreateUserDto) {
    const response = await this.authService.registerUser(user);
    return response;
  }

  @Post('signin')
  //@UseGuards(AuthGuard('jwt'))
  async login(@Request() req) {
    console.log(req.user);
    //return this.authService.login(req.user);
    return
  }

}
