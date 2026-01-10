import { Module } from '@nestjs/common';
import { HeroContentModule } from './hero-content/hero-content.module';
import { SkillModule } from './skills/skill.module';
import { TestimonialModule } from './testimonials/testimonial.module';
import { WhyChooseItemModule } from './why-choose/why-choose-item.module';
import { HomeController } from './home.controller';

@Module({
  imports: [
    HeroContentModule,
    SkillModule,
    TestimonialModule,
    WhyChooseItemModule,
  ],
  controllers: [HomeController],
})
export class HomeModule { }
