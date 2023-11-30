import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CharactersDocument } from './characters.schema';
import { Model } from 'mongoose';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel('Character') private characterModel: Model<CharactersDocument>,
  ) {}

  async findCharacterByName(name: string) {
    return await this.characterModel.findOne({ name }).exec();
  }

  async findCharacterByGame(name: string) {
    return await this.characterModel.find({ game: name }).exec();
  }
}
