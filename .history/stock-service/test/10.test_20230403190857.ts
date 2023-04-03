import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/auth/reset-password`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an object containing the new password 
      created to the user. 

      {
        "email": "robertplant@gmail.com",
        "password": "341a723dd2713d1ad8327d4301ba3231",
        "role": "user"
      }
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const data = new URLSearchParams();
      data.append('email', 'robertplant@gmail.com');

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      };

      const promisse = await fetch(endpoint, options);
      const response = await promisse.json();
      expect(response.email).toEqual('robertplant@gmail.com');
      expect(response.password).toBeDefined();
      expect(response.access_token).toBeDefined();
    }
  );
  
});
