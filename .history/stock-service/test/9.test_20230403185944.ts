import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/auth/signin`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an object containing a JWT token 
      created to the successful registered user. 

      {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pZ3
        VlbGFuZ2Vsb21lbGxvQGdtYWlsLmNvbSIsInN1YiI6IjY0Mjk4ODg1ZWI4YmU1YzI4NzE5ZWU4YSIsImlhdCI6MTY4MDUzMjQ0MiwiZXhwIjoxNjgwNjE4ODQyfQ.825oCeNJ2XdZUMuC-FZafONsoxtk1CIW5XBksBH3UTg"
      }
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const data = new URLSearchParams();
      data.append('email', 'robertplant@gmail.com');
      data.append('role', 'user');

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
      expect(response.password).toHaveLength(32);
      expect(response.role).toEqual('user');
    }
  );
  
});
