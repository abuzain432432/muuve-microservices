import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { ClientsModule } from '@nestjs/microservices';
import { PROPERTIES_CLIENT } from './constants';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';

@Module({
  imports: [
    ClientConfigModule,
    ClientsModule.registerAsync([
      {
        name: PROPERTIES_CLIENT,
        imports: [ClientConfigModule],
        useFactory: async (configService: ClientConfigService) => {
          return {
            ...configService.getPropertiesClientOptions(),
          };
        },
        inject: [ClientConfigService],
      },
    ]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
