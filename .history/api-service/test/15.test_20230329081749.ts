import { AppService } from '../src/app.service';

describe('AppService', () => {

  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it(`
      *** Unit Testing ***
      The method AppService.getQuote returns a promise that resolves to Quote object.
    `, 
    async () => {
      const response = await appService.getQuote('aapl.us');
      expect(response).toBeDefined();
      expect(response.name).toBeDefined();
      expect(response.name).toEqual('APPLE');
    }
  );
});

