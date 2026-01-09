import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from './skill.schema';
import { SkillDto } from './dto/skill.dto';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) { }

  async getFeaturedSkills(): Promise<SkillDto[]> {
    const skills = await this.skillModel
      .find({ isFeatured: true })
      .sort({ popularityScore: -1 })
      .lean()
      .exec();

    return (skills as unknown as SkillDocument[]).map((skill) =>
      this.formatSkill(skill),
    );
  }

  async getAllSkills(): Promise<SkillDto[]> {
    const skills = await this.skillModel
      .find()
      .sort({ popularityScore: -1 })
      .lean()
      .exec();

    return (skills as unknown as SkillDocument[]).map((skill) =>
      this.formatSkill(skill),
    );
  }

  private formatSkill(skill: SkillDocument): SkillDto {
    return {
      name: skill.name,
      icon: skill.icon,
      popularityScore: skill.popularityScore,
      isFeatured: skill.isFeatured,
    };
  }
}
