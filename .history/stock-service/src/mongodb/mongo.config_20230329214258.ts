
import { registerAs } from '@nestjs/config';

const host = '172.17.0.2'; // Change this to your host
const port = 3000; // Change this to your port
const database = 'stock-service';

export default registerAs('mongo', () => ({
  uri: 'mongodb://172.17.0.2:27017',
}));

