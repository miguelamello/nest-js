
import { registerAs } from '@nestjs/config';

const host = '172.17.0.2'; // Change to your host
const port = 3000; // Change to your port
const database = 'stock-service'; // Change to a different database name if you want
const stock_collection = 'stock'; // Change to a different collection name if you want
const user_collection = 'user'; // Change to a different collection name if you want

export default registerAs('mongo', () => ({
  uri: `mongodb://${host}:${port}`, 
  database: database, 
  stock_collection: stock_collection,
}));

