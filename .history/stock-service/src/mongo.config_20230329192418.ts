
import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  uri: 'mongodb://172.17.0.2:27017/stock-service',
}));

