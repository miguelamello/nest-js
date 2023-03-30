import { Document } from 'mongoose';

interface User extends Document {
  "email": string,
  "password": string,
  "role": string
}

export default User;
