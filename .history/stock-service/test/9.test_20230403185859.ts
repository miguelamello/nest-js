import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/auth/signin`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an object containing a JWT token. 

      {
        "email": "robertplant@gmail.com",
        "password": "8fc0357152e131226d7b4faa98185b2b",
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
