import { Injectable, StreamableFile } from '@nestjs/common';

@Injectable()
export class AppService {
  getDoc(): string {
    return 'API DOCS';
  }
}
