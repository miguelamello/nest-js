import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [
    JwtModule,
    UsersModule, 
    UtilModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    JwtStrategy, 
    UsersModule, 
    UtilModule],
  exports: [JwtStrategy],
})
export class AuthModule {}
