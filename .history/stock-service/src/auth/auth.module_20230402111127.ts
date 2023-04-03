import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [
    JwtModule.register({
      secret: '59569a17-6692-4dde-bb5d-ed9a1c00b5d9',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
    UsersModule, 
    UtilModule
  ],
  controllers: [AuthController],
  providers: [AuthService, wtStrategyJ, UsersModule, UtilModule],
  exports: [],
})
export class AuthModule {}
