import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SoundTrackDocument } from './soundtrack.schema';

@Injectable()
export class SoundtrackService {
  constructor(
    @InjectModel('SoundTrack')
    private soundTrackModel: Model<SoundTrackDocument>,
  ) {}

  async findSoundTrackByName(name: string) {
    let SoundTrack = await this.soundTrackModel.findOne({ name }).exec();
    return SoundTrack;
  }
}
