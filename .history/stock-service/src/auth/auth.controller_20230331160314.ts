import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import CreateUserDto  from '../dto/create-user.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @Post('signin')
  async singin(@Body() createUserDto: CreateUserDto) { console.log();
    //const user = await this.authService.registerUser(createUserDto);
    //return { message: 'User created successfully', user };
    return {};
  }

  @Post('login')
  @UseGuards(AuthGuard('jwt'))
  async login(@Request() req) {

    return this.authService.login(req.user);
    
  }

}
