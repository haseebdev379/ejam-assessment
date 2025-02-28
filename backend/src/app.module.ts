import { Module } from '@nestjs/common';
import { HeroRegistryModule } from './superhero/superhero.module';

@Module({
  imports: [HeroRegistryModule],
})
export class AppModule {}
