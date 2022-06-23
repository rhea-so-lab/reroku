import { Module } from '@nestjs/common';
import { DiscordModule } from './infrastructures/discord/discord.module';
import { TypeORMModule } from './infrastructures/typeorm/typeorm.module';
import { PlatformModule } from './platform/platform.module';

@Module({
  imports: [TypeORMModule, DiscordModule, PlatformModule],
})
export class AppModule {}
