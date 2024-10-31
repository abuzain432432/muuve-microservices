import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UsersAppModule } from './users-app.module';

const USER_SERVICE_PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersAppModule,
    {
      transport: Transport.TCP,
      options: {
        port: USER_SERVICE_PORT,
      },
    },
  );
  await app.listen();
}

bootstrap();
