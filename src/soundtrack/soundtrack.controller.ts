import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { SoundtrackService } from './soundtrack.service';

@Controller('SoundTrack')
export class SoundTrackController {
  constructor(private readonly soundTrackservice: SoundtrackService) {}

  @Get(':name')
  async getSoundTrackByName(@Param('name') name: string) {
    const foundSoundTrack =
      await this.soundTrackservice.findSoundTrackByName(name);

    if (!foundSoundTrack) {
      throw new NotFoundException(`"${name}" no se a encontrado`);
    }
    return foundSoundTrack;
  }
}
