import { Schema } from 'mongoose';

export const StockSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: false },
  publicationDate: { type: Date, required: false },
});
