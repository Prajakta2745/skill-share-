import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WhyChooseItem, WhyChooseItemSchema } from './why-choose-item.schema';
import { WhyChooseItemService } from './why-choose-item.service';
import { WhyChooseItemController } from './why-choose-item.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WhyChooseItem.name, schema: WhyChooseItemSchema },
    ]),
  ],
  controllers: [WhyChooseItemController],
  providers: [WhyChooseItemService],
  exports: [WhyChooseItemService],
})
export class WhyChooseItemModule { }
