import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import CreateUserDto  from '../dto/create-user.dto';
import User from '../interfaces/user.interface';
import { UsersService } from  '../users/users.service';
import { UtilService } from '../util/util.service';
import Message from '../interfaces/message.interface';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService, 
    private UsersService: UsersService, 
    private UtilService: UtilService, 
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(user: CreateUserDto): Promise<User | Message> {
    if (this.UtilService.isEmail(user.email)) {
      const item: User = {};
      item.email = user.email;
      item.password = this.getPassword();
      const response = this.UsersService.create(item);
      return response;
    }
    return { stat }
  }

  private getPassword(): string { return '123456';
    //const randomBytes = crypto.randomBytes(32); // Generate 16 random bytes
    //return randomBytes.toString('hex'); // Convert to hexadecimal string of 32 characters
  }

}
