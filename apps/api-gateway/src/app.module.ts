import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { ClientConfigModule } from './client-config/client-config.module';

@Module({
  imports: [UsersModule, PropertiesModule, ClientConfigModule],
})
export class AppModule {}
