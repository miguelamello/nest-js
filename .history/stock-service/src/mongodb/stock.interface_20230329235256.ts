import { Document } from 'mongoose';

interface Stock extends Document {
  "name": string,
  "symbol": string,
  "open": number,
  "high": number,
  "low": number,
  "close": number, 
  "volume": number,
  "date": Date,
  "time": Date,
  "user": number
}

export default Stock;

export class CreateStockDto {
  name: string;
  age: number;
  breed: string;
}
