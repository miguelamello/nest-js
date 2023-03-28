import { Controller, Get, Header, StreamableFile, Inject } from '@nestjs/common';
//import { Logger } from 'winston';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from stock-service!';
  }
}
