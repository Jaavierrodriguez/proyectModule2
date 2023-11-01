import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('Game')
export class GameController {
  constructor(private readonly gameservice: GameService) {}

  @Get(':name')
  async getGameByName(@Param('name') name: string) {
    const foundGame = await this.gameservice.findGameByName(name);

    if (!foundGame) {
      throw new NotFoundException(`"${name}" no se a encontrado`);
    }
    return foundGame;
  }
}
