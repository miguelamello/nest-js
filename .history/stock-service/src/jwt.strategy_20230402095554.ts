import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  private readonly jwtKey: string;

  constructor(
    private authService: AuthService
  ) {
    // Generate a new key each time the application starts
    this.jwtKey = crypto.randomBytes(32).toString('hex');
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'UxZ7tG7IdMbrVI1JKSSQTydoR9tqiX8y',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}


