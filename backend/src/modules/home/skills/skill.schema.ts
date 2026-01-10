import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema({ timestamps: true })
export class Skill {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true, min: 0, max: 100 })
  popularityScore: number;

  @Prop({ default: false })
  isFeatured: boolean;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
