import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

NestFactory.createApplicationContext(AppModule);
