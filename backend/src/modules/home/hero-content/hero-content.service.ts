import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HeroContent, HeroContentDocument } from './hero-content.schema';
import { HeroContentDto } from './dto/hero-content.dto';

@Injectable()
export class HeroContentService {
  constructor(
    @InjectModel(HeroContent.name)
    private heroContentModel: Model<HeroContentDocument>,
  ) { }

  async getActiveHeroContent(): Promise<HeroContentDto | null> {
    const heroContent = await this.heroContentModel
      .findOne({ isActive: true })
      .lean()
      .exec();

    if (!heroContent) {
      return null;
    }

    return this.formatHeroContent(
      heroContent as unknown as HeroContentDocument,
    );
  }

  private formatHeroContent(heroContent: HeroContentDocument): HeroContentDto {
    return {
      title: heroContent.title,
      subtitle: heroContent.subtitle,
      primaryCtaText: heroContent.primaryCtaText,
      secondaryCtaText: heroContent.secondaryCtaText,
      isActive: heroContent.isActive,
    };
  }
}
