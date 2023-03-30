import { Schema } from 'mongoose';

export const StockSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  open: { type: String, required: false },
  high: { type: Date, required: false },
});
