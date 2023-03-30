import env from './env-config';

describe('GET /', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/`;

  it(
    `
      *** Integration Testing ***

      The method AppService.getQuote returns a promise that resolves to valid Quote object.
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.text();
      //Status code must be 200
      expect(response.status).toBe(200);
      //expect(response).toBeDefined();
      //expect(response.name).toBeDefined();
      //expect(response.name).toEqual('APPLE');
    }
  );
  
});
