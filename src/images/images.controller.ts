import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ImagesService } from './images.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('Images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('allPictures')
  async getAllPictures() {
    try {
      return await this.imagesService.getPictures();
    } catch {
      throw new Error('No hay pictures');
    }
  }

  @Get('game/:game')
  async getImagesByGame(@Param('game') game: string) {
    try {
      return await this.imagesService.getImagesByGame(game);
    } catch {
      throw new Error('no hay pictures');
    }
  }
}
