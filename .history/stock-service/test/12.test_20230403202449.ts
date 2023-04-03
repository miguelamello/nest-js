import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/stocks/t.us`;

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
        Please you must enter a valid token in the Authorization header.
      */
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvYmVydHBsYW50QGdtYWlsLmNvbSIsInN1YiI6IjY0MmI0YTgxNzhjMmM0YzliM2NjZGJkMCIsImlhdCI6MTY4MDU2NDA4OCwiZXhwIjoxNjgwNjUwNDg4fQ.PwXvBcSKOb5QhmWo1dkJg_TRtsFc39cHK0bETnNdg9g'
        }
      };
      const promisse = await fetch(endpoint, options);
      const response = await promisse.json();
      expect(response).toBeDefined();
      expect(response.symbol).toBeDefined();
      expect(response.date).toBeDefined();
      expect(response.open).toBeDefined();
      expect(response.high).toBeDefined();
      expect(response.low).toBeDefined();
      expect(response.close).toBeDefined();
      expect(response.volume).toBeDefined();
      expect(response.name).toBeDefined();
      expect(response.user).toBeDefined();
    }
  );
  
});
