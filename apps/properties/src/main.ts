import { NestFactory } from '@nestjs/core';
import { PropertiesAppModule } from './properties-app.module';
import { Transport } from '@nestjs/microservices';

const PROPERTIES_SERVICE_PORT = 3002;
async function bootstrap() {
  const app = await NestFactory.createMicroservice(PropertiesAppModule, {
    transport: Transport.TCP,
    options: {
      port: PROPERTIES_SERVICE_PORT,
    },
  });
  await app.listen();
}
bootstrap();
