import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UtilService {

  isEmail( email: string ) {
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    return regex.test(email);
  }

  isPassword( password: string ) {
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    return regex.test(password);
  }

  getHash(): string {
    const randomBytes = crypto.randomBytes(16); // Generate 16 random bytes
    return randomBytes.toString('hex'); // Convert to hexadecimal string of 32 characters
  }

}
