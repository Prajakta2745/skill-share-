import { Controller, Get, Query } from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { TestimonialDto } from './dto/testimonial.dto';

@Controller()
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) { }

  @Get()
  async getTestimonials(
    @Query('minRating') minRating?: string,
  ): Promise<TestimonialDto[]> {
    if (minRating) {
      const rating = parseInt(minRating, 10);
      return this.testimonialService.getTestimonialsByRating(rating);
    }
    return this.testimonialService.getApprovedTestimonials();
  }
}
