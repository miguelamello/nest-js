import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto }  from '../dto/create-user.dto';
import { User } from '../interfaces/user.interface';
import { UsersService } from  '../users/users.service';
import { UtilService } from '../util/util.service';
import { Message } from '../interfaces/message.interface';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService, 
    private usersService: UsersService, 
    private utilService: UtilService, 
  ) {}

  async token(user: CreateUserDto): Promise<any|Message> {
    if (this.utilService.isEmail(user.email || '') === false) { // Not a valid email
      return { statusCode: 400, message: 'Invalid email' }
    }
    if (this.utilService.isPassword(user.password || '') === false) { // Not a valid password
      return { statusCode: 400, message: 'Invalid password' }
    }
    const response = await this.usersService.validadeUser(user.email, user.password); // Validate user credentials
    if ( response.statusCode === 400 ) { // User or Password is incorrect.
      return response
    }
    const payload = { username: (await response).email, sub: (await response)._id };
    //return { access_token: this.jwtService.sign(payload) }
    return this.jwtService
  }

  async signUp(user: CreateUserDto): Promise<any | Message> {
    const email = (user.email || '').toLowerCase();
    const role = (user.role || '').toLowerCase();
    if (this.utilService.isEmail(email) === false) { // Not a valid email
      return { statusCode: 400, message: 'Invalid email.' }
    }
    if (['admin','user'].indexOf(role) === -1) { // Not a valid role
      return { statusCode: 400, message: 'Invalid role. Must be Admin or User.' }
    }
    const response = await this.usersService.getUser(email); // Verify users already exists
    if ( response.statusCode === 400 ) { // User not found
      const item: User = {};
      item.email = email;
      item.password = this.utilService.getHash();
      item.role = role;
      const result = this.usersService.create(item); // Create user
      return {
        email: (await result).email, 
        password: (await result).password, 
        role: (await result).role
      }
    }
    return {
      email: (await response).email, 
      password: (await response).password, 
      role: (await response).role
    }
  }

  async signIn(user: CreateUserDto): Promise<any|Message> {
    if (this.utilService.isEmail(user.email || '') === false) { // Not a valid email
      return { statusCode: 400, message: 'Invalid email' }
    }
    if (this.utilService.isPassword(user.password || '') === false) { // Not a valid password
      return { statusCode: 400, message: 'Invalid password' }
    }
    const exists = await this.usersService.getUser(user.email); // Verify users already exists
    if ( exists.statusCode === 400 ) { // User not found
      return { statusCode: 400, message: 'User not found' }
    }
    const validate = await this.usersService.validadeUser(user.email, user.password); // Validate user credentials
    if ( validate.statusCode === 400 ) { // User or Password is incorrect.
      return validate
    }
    const payload = { username: (await validate).email, sub: (await validate)._id };
    return { access_token: this.jwtService.sign(payload) }
  }

}
