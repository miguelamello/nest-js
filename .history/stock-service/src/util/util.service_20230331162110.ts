import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {

  this._isEmail = (email = "") => {
    let regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    return regex.test(email);
  };
}
