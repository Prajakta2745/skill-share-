import { Controller, Get } from '@nestjs/common';
import { WhyChooseItemService } from './why-choose-item.service';
import { WhyChooseItemDto } from './dto/why-choose-item.dto';

@Controller()
export class WhyChooseItemController {
  constructor(private readonly whyChooseItemService: WhyChooseItemService) { }

  @Get()
  async getWhyChooseItems(): Promise<WhyChooseItemDto[]> {
    return this.whyChooseItemService.getAllWhyChooseItems();
  }
}
