import { Test, TestingModule } from '@nestjs/testing';
import { generateTestObject, mockClass } from '@src/module/utils/test.util';
import { ChatRepository } from '../../adapters/chat.repository';
import { Chat } from '../../domains/chat.entity';
import { ChatService } from '../chat.service';

describe('ChatService', () => {
  let service: ChatService;
  let repository: ChatRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatService, mockClass(ChatRepository)],
    }).compile();

    service = module.get(ChatService);
    repository = module.get(ChatRepository);
  });

  beforeEach(() => {
    jest.resetAllMocks();

    jest.spyOn(repository, 'save').mockImplementation((chat: Chat) => Promise.resolve(chat));
  });

  it('[success]', () => {
    expect(service.test()).toBe('hi');
  });

  describe('create', () => {
    it('[Success]', async () => {
      const chat: Chat = await service.create('rhea', '123');
      expect(chat).toMatchObject(generateTestObject(Chat, { name: 'rhea', content: '123' }));
    });
  });
});
