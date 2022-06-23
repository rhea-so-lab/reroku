import { Column, LoadEnvironment } from 'env-typescript';

@LoadEnvironment()
export class INI {
  @Column()
  static DISCORD_BOT_TOKEN: string;
}
