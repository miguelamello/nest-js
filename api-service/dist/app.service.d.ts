import { StreamableFile } from '@nestjs/common';
import Quote from './interfaces/quote.interface';
export declare class AppService {
    #private;
    private stooqApiKey;
    getDoc(): StreamableFile;
    getQuote(symbol: string): Promise<Quote>;
}
