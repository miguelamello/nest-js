import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    
    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);
    
  }
}
