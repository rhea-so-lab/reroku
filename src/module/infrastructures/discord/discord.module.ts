import { Module } from '@nestjs/common';
import { DiscordService } from './discord.client';

@Module({ providers: [DiscordService] })
export class DiscordModule {}
