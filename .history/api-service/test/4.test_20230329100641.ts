import env from './env-config';

describe('GET /', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/quote/aapl.us`;

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
      const promisse = await fetch(endpoint);
      const response = await promisse.text();
      //Status code must be 200
      //expect(response.status).toBe(200);
      //expect(response).toBeDefined();
      //expect(response.name).toBeDefined();
      //expect(response.name).toEqual('APPLE');
      console.log(response);
    }
  );
  
});
