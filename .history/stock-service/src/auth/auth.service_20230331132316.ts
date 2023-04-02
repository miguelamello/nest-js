import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import CreateUserDto  from '../dto/create-user.dto';
import User from '../interfaces/user.interface';

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
    const user = new User();
    user.username = createUserDto.username;
    user.password = await this.hashPassword(createUserDto.password);
    return this.userRepository.save(user);
  }

  private async hashPassword(password: string): Promise<string> {
    const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
  }

}
