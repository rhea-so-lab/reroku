import { Module } from '@nestjs/common';
import { BoreService } from './bore.service';

@Module({ providers: [BoreService] })
export class BoreModule {}
