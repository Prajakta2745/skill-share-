import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Testimonial, TestimonialDocument } from './testimonial.schema';
import { TestimonialDto } from './dto/testimonial.dto';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectModel(Testimonial.name)
    private testimonialModel: Model<TestimonialDocument>,
  ) { }

  async getApprovedTestimonials(): Promise<TestimonialDto[]> {
    const testimonials = await this.testimonialModel
      .find({ isApproved: true })
      .sort({ rating: -1, createdAt: -1 })
      .lean()
      .exec();

    return (testimonials as unknown as TestimonialDocument[]).map(
      (testimonial) => this.formatTestimonial(testimonial),
    );
  }

  async getTestimonialsByRating(
    minRating: number = 4,
  ): Promise<TestimonialDto[]> {
    const testimonials = await this.testimonialModel
      .find({ isApproved: true, rating: { $gte: minRating } })
      .sort({ rating: -1 })
      .lean()
      .exec();

    return (testimonials as unknown as TestimonialDocument[]).map(
      (testimonial) => this.formatTestimonial(testimonial),
    );
  }

  private formatTestimonial(testimonial: TestimonialDocument): TestimonialDto {
    return {
      userName: testimonial.userName,
      role: testimonial.role,
      message: testimonial.message,
      rating: testimonial.rating,
    };
  }
}
