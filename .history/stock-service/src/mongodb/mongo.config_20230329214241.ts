
import { registerAs } from '@nestjs/config';

const host = '172.17.0.2'; //
const port = 3000;
const database = 'stock-service';

export default registerAs('mongo', () => ({
  uri: 'mongodb://172.17.0.2:27017',
}));

