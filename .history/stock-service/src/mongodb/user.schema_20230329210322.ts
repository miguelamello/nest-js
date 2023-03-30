import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  close: { type: Number, required: true },
  volume: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  user: { type: Number, required: true },
});
