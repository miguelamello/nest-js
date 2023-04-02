import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { MongoStrategy } from '../mongo.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { UtilModule } from '../util/util.module';


@Module({
  imports: [
    JwtModule.register({
      secret: 'UxZ7tG7IdMbrVI1JKSSQTydoR9tqiX8y',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
    UsersModule, 
    UtilModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, MongoStrategy, UsersService, UtilModule],
  exports: [JwtStrategy, MongoStrategy],
})
export class AuthModule {}
