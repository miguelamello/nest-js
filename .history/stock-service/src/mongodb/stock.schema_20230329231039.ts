import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StockDocument = HydratedDocument<Stock>;

@Schema()
export class Stock {
  @Prop()
  name: string;

  @Prop()
  symbol: string;

  @Prop()
  open: number;

  @Prop()
  high: number;

  @Prop()
  low: number;

  @Prop()
  close: number;

  @Prop()
  volume: number;

  @Prop()
  date: Date;

  @Prop()
  time: Date;

  @Prop()
  user: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);

