import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';

import { Environment } from 'roit-environment';
import { HttpExceptionFilter,RoitResponseInterceptor } from "@roit/roit-response-handler"

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(Environment.getProperty("port"));
}
bootstrap();
