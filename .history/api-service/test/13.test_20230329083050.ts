import { AppService } from '../src/app.service';

describe('AppService', () => {

  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it(`
      *** Unit Testing ***
      The method AppService.getDoc return an html containing the complete microservice documentation.
    `, 
    async () => {
      const response = appService.getDoc();
      expect(response).toBeDefined();
      expect(response).toHaveLength(2);
    }
  );
});

