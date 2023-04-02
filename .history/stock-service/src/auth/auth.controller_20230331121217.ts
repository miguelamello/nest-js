import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  import { CreateUserDto } from './dto/create-user.dto';

  @Post('login')
  @UseGuards(AuthGuard('jwt'))
  async login(@Request() req) {

    return this.authService.login(req.user);
    
  }

}
