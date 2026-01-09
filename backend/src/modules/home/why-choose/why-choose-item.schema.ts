import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WhyChooseItemDocument = WhyChooseItem & Document;

@Schema({ timestamps: true })
export class WhyChooseItem {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  icon: string;
}

export const WhyChooseItemSchema = SchemaFactory.createForClass(WhyChooseItem);
