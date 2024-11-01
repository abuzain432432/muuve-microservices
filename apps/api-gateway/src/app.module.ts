import { Module } from '@nestjs/common';

import { PropertiesModule } from './properties/properties.module';
import { ClientConfigModule } from './client-config/client-config.module';

@Module({
  imports: [PropertiesModule, ClientConfigModule],
})
export class AppModule {}
