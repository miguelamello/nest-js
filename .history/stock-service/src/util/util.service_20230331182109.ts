import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class UtilService {

  isEmail( email: string ) {
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    return regex.test(email);
  }
  

}
