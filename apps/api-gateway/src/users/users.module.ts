import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule } from '@nestjs/microservices';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';
import { USERS_CLIENT } from './constants';

@Module({
  imports: [
    ClientConfigModule,
    ClientsModule.registerAsync([
      {
        name: USERS_CLIENT,
        imports: [ClientConfigModule],
        useFactory: async (clientConfigService: ClientConfigService) => ({
          ...clientConfigService.getUsersClientOptions(),
        }),
        inject: [ClientConfigService],
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
