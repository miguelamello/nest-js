
import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  uri: 'mongodb://localhost:27017/stock-service',
}));

