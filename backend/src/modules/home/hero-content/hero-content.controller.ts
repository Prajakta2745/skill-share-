import { Controller, Get } from '@nestjs/common';
import { HeroContentService } from './hero-content.service';
import { HeroContentDto } from './dto/hero-content.dto';

@Controller()
export class HeroContentController {
  constructor(private readonly heroContentService: HeroContentService) { }

  @Get()
  async getHeroContent(): Promise<HeroContentDto | null> {
    return this.heroContentService.getActiveHeroContent();
  }
}
