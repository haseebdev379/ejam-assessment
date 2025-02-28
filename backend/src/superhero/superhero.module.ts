import { Module } from '@nestjs/common';
import { HeroRegistryController } from './superhero.controller';
import { HeroRegistryService } from './superhero.service';

@Module({
  controllers: [HeroRegistryController],
  providers: [HeroRegistryService],
})
export class HeroRegistryModule {} 