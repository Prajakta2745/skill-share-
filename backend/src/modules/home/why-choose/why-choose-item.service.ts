import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WhyChooseItem, WhyChooseItemDocument } from './why-choose-item.schema';
import { WhyChooseItemDto } from './dto/why-choose-item.dto';

@Injectable()
export class WhyChooseItemService {
  constructor(
    @InjectModel(WhyChooseItem.name)
    private whyChooseItemModel: Model<WhyChooseItemDocument>,
  ) { }

  async getAllWhyChooseItems(): Promise<WhyChooseItemDto[]> {
    const items = await this.whyChooseItemModel.find().lean().exec();

    return (items as unknown as WhyChooseItemDocument[]).map((item) =>
      this.formatWhyChooseItem(item),
    );
  }

  private formatWhyChooseItem(item: WhyChooseItemDocument): WhyChooseItemDto {
    return {
      title: item.title,
      description: item.description,
      icon: item.icon,
    };
  }
}
