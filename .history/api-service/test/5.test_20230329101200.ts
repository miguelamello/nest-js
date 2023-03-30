import env from './env-config';

describe('GET /', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/quote/xxxx.xx`;

  it(
    `
      *** Integration Testing ***

      The method AppService.getQuote returns a promise that resolves to invalid Quote object.
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const promisse = await fetch(endpoint);
      const response = await promisse.json();
      expect(response).toBeDefined();
      expect(response.name).toBeUndefined;
      console.log(response);
    }
  );
  
});
