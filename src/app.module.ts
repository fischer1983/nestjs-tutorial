import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from './infrastructure/controller/controller.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';

@Module({
  imports: [ControllerModule, EnvironmentConfigModule],
  // providers: [AppService],
})
export class AppModule {}
