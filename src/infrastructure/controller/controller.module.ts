import { Module } from '@nestjs/common';
// import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { PersonController } from './person/person.controller';


@Module({
  // imports: [UsecasesProxyModule.register()],
  controllers: [PersonController],
})
export class ControllerModule {}