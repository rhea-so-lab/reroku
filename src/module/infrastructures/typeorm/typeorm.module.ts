import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { entities } from './typeorm.entities';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          type: 'sqlite',
          host: '',
          port: '',
          username: '',
          password: '',
          database: ':memory:',
          synchronize: true,
          dropSchema: true,
          logging: true,
          entities: entities,
          namingStrategy: new SnakeNamingStrategy(),
          timezone: '+09:00',
        };
      },
      inject: [],
    }),
  ],
})
export class TypeORMModule {}
