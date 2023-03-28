import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getDoc(): string {
    return 'Hello World from api-service!';
  }
}
