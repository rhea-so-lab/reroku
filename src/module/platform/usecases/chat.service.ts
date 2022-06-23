import { Injectable } from '@nestjs/common';
import { ChatRepository } from '../adapters/chat.repository';
import { Chat } from '../domains/chat.entity';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  test(): string {
    return 'hi';
  }

  async create(name: string, content: string): Promise<Chat> {
    return this.chatRepository.save(Chat.generate(name, content));
  }

  async find(): Promise<Chat[]> {
    return this.chatRepository.find();
  }
}
