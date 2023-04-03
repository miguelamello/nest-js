import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
//import { JwtStrategy } from '../jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [
    JwtModule.register({
      secret: '458100c6-31e5-432e-bd46-3b380c9a7875',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
    UsersModule, 
    UtilModule
  ],
  controllers: [AuthController],
  providers: [AuthService, /*JwtStrategy, UsersModule, UtilModule*/],
  exports: [JwtModule/*JwtStrategy*/],
})
export class AuthModule {}
