import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameDocument } from './game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private gameModel: Model<GameDocument>) {}

  async findGameByName(name: string) {
    let game = await this.gameModel.findOne({ name }).exec();
    console.log(game);

    return game;
  }
}
