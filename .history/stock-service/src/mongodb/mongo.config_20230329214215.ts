
import { registerAs } from '@nestjs/config';

const host = ''; 
const port = 3000;
const 

export default registerAs('mongo', () => ({
  uri: 'mongodb://172.17.0.2:27017',
}));

