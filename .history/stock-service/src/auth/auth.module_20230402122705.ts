import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { env } from '../env';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [
    JwtModule.register({
      secret: env.jwt_key,
      signOptions: { expiresIn: env.jwt_expiration }, // token expiration time set 24 hours
    }),
    UsersModule, 
    UtilModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersModule, UtilModule],
  exports: [JwtStrategy],
})
export class AuthModule {}
