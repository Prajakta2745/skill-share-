import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroContent, HeroContentSchema } from './hero-content.schema';
import { HeroContentService } from './hero-content.service';
import { HeroContentController } from './hero-content.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HeroContent.name, schema: HeroContentSchema },
    ]),
  ],
  controllers: [HeroContentController],
  providers: [HeroContentService],
  exports: [HeroContentService],
})
export class HeroContentModule { }
