import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroContentDocument = HeroContent & Document;

@Schema({ timestamps: true })
export class HeroContent {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  primaryCtaText: string;

  @Prop({ required: true })
  secondaryCtaText: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const HeroContentSchema = SchemaFactory.createForClass(HeroContent);
