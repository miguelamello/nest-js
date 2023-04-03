import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/stocks/txx.us`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an error object since the 
      stock symbol does not exists in any stock exchange.

      {
        "statusCode": 400,
        "message": "A valid stock symbol is required."
      }

      ***
        Please you must enter a valid token in the Authorization header.
      ***
      
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
      expect(response.statusCode).toEqual(400);
      expect(response.message).toEqual('A valid stock symbol is required.');
    }
  );
  
});
