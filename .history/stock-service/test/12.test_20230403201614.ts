import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/auth/stocks/t.us`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an object containing the stock information.

      {
        "symbol": "T.US",
        "date": "2023-04-03T19:12:50Z",
        "open": 19.27,
        "high": 19.475,
        "low": 19.2,
        "close": 19.445,
        "volume": 12681752,
        "name": "AT&T",
        "user": "6429cba583bcc02d43667783"
      }
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const data = new URLSearchParams();
      //data.append('email', 'robertanimal@gmail.com');

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2V0cmluZGFkZUBpcHAuY29tIiwic3ViIjoiNjQyOWNiYTU4M2JjYzAyZDQzNjY3NzgzIiwiaWF0IjoxNjgwNDYwNzQ4LCJleHAiOjE2ODA1NDcxNDh9.FnLXfRf7x2kIjwYxHPb5NBxYOhrLcuSBF3Yzz-VkC8E'
        },
        body: data
      };

      const promisse = await fetch(endpoint, options);
      const response = await promisse.json();
      expect(response).toBeDefined();
      expect(response.symbol).toEqual('User not found');
    }
  );
  
});
