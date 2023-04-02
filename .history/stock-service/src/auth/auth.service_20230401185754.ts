import { Injectable } from '@nestjs/common';
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
    private usersService: UsersService, 
    private UtilService: UtilService, 
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: CreateUserDto): Promise<any | Message> {
    if (this.UtilService.isEmail(user.email) === false) { // Not a valid email
      return { statusCode: 400, message: 'Invalid email' }
    }
    const response = await this.usersService.getUser(user.email); // Verify users already exists
    if ( response.statusCode === 400 ) { // User not found
      const item: User = {};
      item.email = user.email;
      item.password = this.UtilService.getHash();
      item.role = 'user';
      const result = this.UsersService.create(item); // Create user
      return {
        email: (await result).email, 
        password: (await result).password
      }
    }
    return {
      email: (await response).email, 
      password: (await response).password
    }
  }

  async signIn(user: CreateUserDto): Promise<any|Message> {
    if (this.UtilService.isEmail(user.email || '') === false) { // Not a valid email
      return { statusCode: 400, message: 'Invalid email' }
    }
    if (this.UtilService.isPassword(user.password || '') === false) { // Not a valid password
      return { statusCode: 400, message: 'Invalid password' }
    }
    const response = await this.UsersService.getUser(user.email); // Verify users already exists
    if ( response.statusCode === 400 ) { // User not found
      return { statusCode: 400, message: 'User not found' }
    }
    const payload = { username: (await response).email, sub: (await response)._id };
    return { access_token: this.jwtService.sign(payload) }
  }

}
