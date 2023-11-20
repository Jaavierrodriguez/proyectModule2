import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EnemiesService } from './enemies.service';

@Controller('Enemies')
export class EnemiesController {
  constructor(private readonly enemieservice: EnemiesService) {}

  @Get(':name')
  async getEnemiesByName(@Param('name') name: string) {
    try {
      const foundEnemie = await this.enemieservice.findEnemiByName(name);

      if (!foundEnemie) {
        throw new NotFoundException(`El enemigo "${name}" no se a encontrado`);
      }
      return foundEnemie;
    } catch {
      throw new Error('Enemigo parece que esta erradicado');
    }
  }
}
