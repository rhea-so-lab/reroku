import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  content: string;

  static generate(name: string, content: string): Chat {
    const chat: Chat = new Chat();

    chat.name = name;
    chat.content = content;

    return chat;
  }
}
