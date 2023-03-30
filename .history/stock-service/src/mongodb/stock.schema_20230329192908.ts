import { Schema } from 'mongoose';

export const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: false },
  publicationDate: { type: Date, required: false },
});
