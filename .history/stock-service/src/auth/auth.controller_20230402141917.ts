import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto }  from '../dto/create-user.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('token')
  async token(@Body() user: CreateUserDto) {
    //const response = await this.authService.signUp(user);
    ///return response;
    return 
  }
  
  @Post('signup')
  async singup(@Body() user: CreateUserDto) {
    const response = await this.authService.signUp(user);
    return response;
  }

  @Post('signin')
  async singin(@Body() user: CreateUserDto) {
    const response = await this.authService.signIn(user);
    return response;
  }

}
