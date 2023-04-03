import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/auth/reset-password`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an error object since the email 
      does not exists in database or is malformed. 

      {
        "statusCode": 400,
        "message": "User not found"
      }
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const data = new URLSearchParams();
      data.append('email', 'robertanimal@gmail.com');

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      };

      const promisse = await fetch(endpoint, options);
      const response = await promisse.json();
      expect(response.statusCode).toEqual('robertplant@gmail.com');
      expect(response.password).toHaveLength(32);
      expect(response.role).toEqual('user');
    }
  );
  
});
