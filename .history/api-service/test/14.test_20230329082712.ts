import { AppService } from '../src/app.service';

describe('AppService', () => {

  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it(`
      *** Unit Testing ***
      The endpoint must return an html containing the complete microservice documentation.
    `, 
    async () => {
      const response = await appService.getQuote('xxxx.xx');
      expect(response).toBeDefined();
      expect(response).toHaveLength(2);
    }
  );
});

