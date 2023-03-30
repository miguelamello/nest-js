import { Document } from 'mongoose';

interface User ext {
  "email": string,
  "password": string,
  "role": string
}

export default User;
