import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}

  @Get(':name')
  async getCharactersByName(@Param('name') name: string) {
    try {
      const foundCharacter =
        await this.characterService.findCharacterByName(name);

      if (!foundCharacter) {
        throw new NotFoundException(
          `El personaje "${name}" no se a encontrado`,
        );
      }
      return foundCharacter;
    } catch {
      throw new Error('Esto no funciona');
    }
  }

  @Get('/game/:name')
  async getCharacterbyGame(@Param('name') name: string) {
    try {
      const foundCharacterbyName =
        await this.characterService.findCharacterByGame(name);

      if (!foundCharacterbyName) {
        throw new NotFoundException(
          `El personaje "${name}" no se a encontrado`,
        );
      }
      return foundCharacterbyName;
    } catch {
      throw new Error('Que no lo he enchufao');
    }
  }
}
