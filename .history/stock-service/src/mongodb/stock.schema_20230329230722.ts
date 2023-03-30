import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StockDocument = HydratedDocument<Stock>;

@Schema()
export class Stock {
  @Prop()
  name: string;

  @Prop()
  symbol: number;

  @Prop()
  breed: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);

export const StockSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  close: { type: Number, required: true },
  volume: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  user: { type: Number, required: true },
});
