import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import CreateUserDto  from '../dto/create-user.dto';
import User from '../interfaces/user.interface';
import { UsersService } from  '../users/u'

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = {};
    user.email = createUserDto.email;
    user.password = this.getPassword();
    return this.userRepository.save(user);
  }

  private getPassword(): string {
    const randomBytes = crypto.randomBytes(32); // Generate 16 random bytes
    return randomBytes.toString('hex'); // Convert to hexadecimal string of 32 characters
  }

}
