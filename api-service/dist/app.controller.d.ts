import { StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import Quote from './interfaces/quote.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getDoc(): StreamableFile;
    getQuote(symbol: string): Promise<Quote>;
}
