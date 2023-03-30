import { Document } from 'mongoose';

interface User extends {
  "email": string,
  "password": string,
  "role": string
}

export default User;
