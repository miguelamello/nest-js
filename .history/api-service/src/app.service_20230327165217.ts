import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVoid(): string {
    return '';
  }
}
