import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestimonialDocument = Testimonial & Document;

@Schema({ timestamps: true })
export class Testimonial {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop({ default: false })
  isApproved: boolean;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
