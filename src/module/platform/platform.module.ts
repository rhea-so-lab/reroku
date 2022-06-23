import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRepository } from './adapters/chat.repository';
import { ChatService } from './usecases/chat.service';

@Module({ imports: [TypeOrmModule.forFeature([ChatRepository])], providers: [ChatService] })
export class PlatformModule {}
