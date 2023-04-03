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


