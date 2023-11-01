import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EnemiesDocument } from './enemies.schema';
import { Model } from 'mongoose';

@Injectable()
export class EnemiesService {
  constructor(
    @InjectModel('Enemies') private enemiModel: Model<EnemiesDocument>,
  ) {}

  async findEnemiByName(name: string) {
    return await this.enemiModel.findOne({ name }).exec();
  }
}
