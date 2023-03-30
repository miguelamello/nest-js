/* eslint-disable @typescript-eslint/no-empty-function */
import { AppService } from '../src/app.service';

describe('ConvertService', () => {

  let AppService: AppService;

  beforeEach(() => {
    AppService = new AppService();
  });

  it('*** Unit Testing ***', () => {});

  it(`The method AppService.getQuote returns a 
  promise that resolves to Quote .`, 
    async () => {
      const response = await AppService.getQuote('aapl.us');
      expect(response).toBeDefined();
      //expect(response.rates).toBeDefined();
      //expect(response.base).toEqual('USD');
      //expect(typeof response.timestamp).toEqual('number');
    }
  );
});

