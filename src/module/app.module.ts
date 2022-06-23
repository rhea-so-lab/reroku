import { Module } from '@nestjs/common';
import { BoreModule } from './infrastructures/bore/bore.module';
import { DiscordModule } from './infrastructures/discord/discord.module';
import { TypeORMModule } from './infrastructures/typeorm/typeorm.module';
import { PlatformModule } from './platform/platform.module';

@Module({
  imports: [TypeORMModule, DiscordModule, BoreModule, PlatformModule],
})
export class AppModule {}
