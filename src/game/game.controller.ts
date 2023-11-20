import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GameService } from './game.service';
import { error } from 'console';

@Controller('Game')
export class GameController {
  constructor(private readonly gameservice: GameService) {}

  @Get(':name')
  async getGameByName(@Param('name') name: string) {
    try {
      const foundGame = await this.gameservice.findGameByName(name);

      if (!foundGame) {
        throw new NotFoundException(`"${name}" no se a encontrado`);
      }
      return foundGame;
    } catch {
      throw new Error('Error de juego');
    }
  }
}
