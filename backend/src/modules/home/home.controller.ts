import { Controller, Get, Query } from '@nestjs/common';
import { HeroContentService } from './hero-content/hero-content.service';
import { SkillService } from './skills/skill.service';
import { TestimonialService } from './testimonials/testimonial.service';
import { WhyChooseItemService } from './why-choose/why-choose-item.service';

@Controller('home')
export class HomeController {
  constructor(
    private readonly heroContentService: HeroContentService,
    private readonly skillService: SkillService,
    private readonly testimonialService: TestimonialService,
    private readonly whyChooseItemService: WhyChooseItemService,
  ) { }

  @Get('hero')
  async getHero() {
    return this.heroContentService.getActiveHeroContent();
  }

  @Get('skills')
  async getSkills(@Query('featured') featured?: string) {
    if (featured === 'true') {
      return this.skillService.getFeaturedSkills();
    }
    return this.skillService.getAllSkills();
  }

  @Get('testimonials')
  async getTestimonials(@Query('minRating') minRating?: string) {
    if (minRating) {
      const rating = parseInt(minRating, 10);
      return this.testimonialService.getTestimonialsByRating(rating);
    }
    return this.testimonialService.getApprovedTestimonials();
  }

  @Get('why-choose')
  async getWhyChoose() {
    return this.whyChooseItemService.getAllWhyChooseItems();
  }
}
