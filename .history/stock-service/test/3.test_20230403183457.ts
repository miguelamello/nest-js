import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/articles`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an error object since the route 
      does not exists on the api.
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const promisse = await fetch(endpoint);
      const response = await promisse.json();
      expect(response.statusCode).toEqual('APPLE');
    }
  );
  
});
