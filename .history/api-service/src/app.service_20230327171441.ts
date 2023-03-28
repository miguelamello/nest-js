import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDoc(): string {
    return 'Hello World!';
  }
}
