import { Schema } from 'mongoose';

export const StockSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  open: { type: String, required: false },
  high: { type: Date, required: false },
  low: { type: Date, required: false },
  close: { type: Date, required: false },close: { type: Date, required: false },
  date: { type: Date, required: false },
  time: { type: Date, required: false },
});
