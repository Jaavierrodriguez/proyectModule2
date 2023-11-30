import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ImageDocument } from './images.schema';
import { Model } from 'mongoose';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel('Image') private imagesModel: Model<ImageDocument>,
  ) {}

  async getPictures() {
    return await this.imagesModel.find();
  }

  async getImagesByGame(game: string) {
    return await this.imagesModel.find({ game: game });
  }
}
