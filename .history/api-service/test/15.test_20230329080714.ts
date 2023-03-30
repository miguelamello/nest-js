import { AppService } from '../src/app.service';

describe('AppService', () => {

  let AppService: AppService;

  beforeEach(() => {
    AppService = new AppService();
  });

  it(`
    *** Unit Testing ***
    The method AppService.getQuote returns a promise that resolves to Quote object.
  `, 
    async () => {
      const response = await AppService.getQuote('aapl.us');
      expect(response).toBeDefined();
      //expect(response.rates).toBeDefined();
      //expect(response.base).toEqual('USD');
      //expect(typeof response.timestamp).toEqual('number');
    }
  );
});

