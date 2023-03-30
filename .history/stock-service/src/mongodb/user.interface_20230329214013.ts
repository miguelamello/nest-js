import { Document } from 'mongoose';

interface User {
  "email": string,
  "password": string,
  "role": string
}

export default User;
