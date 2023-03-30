import { Schema } from 'mongoose';

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
  user: { type: Date, required: true },
});
