import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class UtilService {

  isEmail( email: string ) {
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    return regex.test(email);
  }

  private getHash(): string {
    const randomBytes = crypto.randomBytes(32); // Generate 16 random bytes
    return randomBytes.toString('hex'); // Convert to hexadecimal string of 32 characters
  }

}
