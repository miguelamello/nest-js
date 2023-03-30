
import { registerAs } from '@nestjs/config';

const host = '172.17.0.2'; // Change to your host
const port = 3000; // Change to your port
const database = 'stock-service'; // Change to a differe

export default registerAs('mongo', () => ({
  uri: `mongodb://${host}:${port}`, 
  database: database,
}));

