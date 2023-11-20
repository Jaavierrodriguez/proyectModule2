import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { SoundtrackService } from './soundtrack.service';

@Controller('SoundTrack')
export class SoundTrackController {
  constructor(private readonly soundTrackservice: SoundtrackService) {}

  @Get(':name')
  async getSoundTrackByName(@Param('name') name: string) {
    try {
      const foundSoundTrack =
        await this.soundTrackservice.findSoundTrackByName(name);

      if (!foundSoundTrack) {
        throw new NotFoundException(
          `"El soundtrack: ${name}" no se a encontrado`,
        );
      }
      return foundSoundTrack;
    } catch {
      throw new Error('Error musical');
    }
  }
}
