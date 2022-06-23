import { Injectable, OnModuleInit } from '@nestjs/common';
import { INI } from '@src/module/config/ini.config';
import { Client } from 'discord.js';

@Injectable()
export class DiscordService implements OnModuleInit {
  private readonly client: Client = new Client({ intents: [] });

  onModuleInit(): void {
    this.client.login(INI.DISCORD_BOT_TOKEN);
  }
}
