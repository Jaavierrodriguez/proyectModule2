import { Module } from '@nestjs/common';
import { SoundtrackService } from './soundtrack.service';
import { SoundTrackController } from './soundtrack.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SoundTrackSchema } from './soundtrack.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SoundTrack',
        schema: SoundTrackSchema,
      },
    ]),
  ],
  providers: [SoundtrackService],
  controllers: [SoundTrackController],
})
export class SoundtrackModule {}
