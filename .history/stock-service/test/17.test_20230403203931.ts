import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/stocks/stat`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an array .

      [
        {
            "times_requested": 5,
            "symbol": "t.us",
            "name": "at&t"
        },
        {
            "times_requested": 4,
            "symbol": "d.us",
            "name": "dominion energy"
        },
        {
            "times_requested": 3,
            "symbol": "a.us",
            "name": "agilent technologies"
        },
        {
            "times_requested": 3,
            "symbol": "b.us",
            "name": "barnes group"
        },
        {
            "times_requested": 1,
            "symbol": "h.us",
            "name": "hyatt hotels"
        },
        ...
      ]

      ***
        Please you must enter a valid ADMIN token in the Authorization header.
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
          'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pZ3VlbGFuZ2Vsb21lbGxvQGdtYWlsLmNvbSIsInN1YiI6IjY0Mjk4ODg1ZWI4YmU1YzI4NzE5ZWU4YSIsImlhdCI6MTY4MDUzMjQ0MiwiZXhwIjoxNjgwNjE4ODQyfQ.825oCeNJ2XdZUMuC-FZafONsoxtk1CIW5XBksBH3UTg'
        }
      };
      const promisse = await fetch(endpoint, options);
      const response = await promisse.json();
      expect(response).toBeDefined();
      expect(response.statusCode).toEqual(401);
      expect(response.message).toEqual('Unauthorized');
    }
  );
  
});
