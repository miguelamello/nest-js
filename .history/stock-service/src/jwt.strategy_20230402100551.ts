import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { v4 as uuidv4 } from 'uuid';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor(
    private authService: AuthService
  ) {
    /*
      We are using the uuidv4() function to generate a random string to use as the secret key.
      Keep in mind that this will change every time the server is restarted.
      And by far will invalidate all the tokens that were generated before the restart.
      
    */
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: uuidv4(),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}


