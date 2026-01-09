import { Controller, Get, Query } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillDto } from './dto/skill.dto';

@Controller()
export class SkillController {
  constructor(private readonly skillService: SkillService) { }

  @Get()
  async getSkills(@Query('featured') featured?: string): Promise<SkillDto[]> {
    if (featured === 'true') {
      return this.skillService.getFeaturedSkills();
    }
    return this.skillService.getAllSkills();
  }
}
