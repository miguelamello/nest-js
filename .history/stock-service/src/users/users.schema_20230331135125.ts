import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

