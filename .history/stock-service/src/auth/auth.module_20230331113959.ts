import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { AuthModuleController } from './auth-module.controller';
import { AuthModuleService } from './auth-module.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'UxZ7tG7IdMbrVI1JKSSQTydoR9tqiX8y',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
  ],
  controllers: [AuthModuleController],
  providers: [AuthModuleService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModuleModule {}
