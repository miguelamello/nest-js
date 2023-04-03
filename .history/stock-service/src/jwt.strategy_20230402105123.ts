import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor(
    private authService: AuthService
  ) {
    /*
      We are using an UUID string as the secret key.
      Keep in mind that this will NOT change every time the service is restarted.
      So if you restart the service, all the tokens will be valid yet.
      If you want to invalidate all the tokens, you need to change this secret key.
    */
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '59569a17-6692-4dde-bb5d-ed9a1c00b5d9',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}


