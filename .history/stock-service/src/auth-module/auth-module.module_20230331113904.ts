import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { AuthModuleController } from './auth-module.controller';
import { AuthModuleService } from './auth-module.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' }, // token expiration time
    }),
  ],
  controllers: [AuthModuleController],
  providers: [AuthModuleService]
})
export class AuthModuleModule {}
