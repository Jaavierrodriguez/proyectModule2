import { Module } from '@nestjs/common';
import { EnemiesService } from './enemies.service';
import { EnemiesController } from './enemies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EnemiesSchema } from './enemies.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Enemies',
        schema: EnemiesSchema,
      },
    ]),
  ],
  providers: [EnemiesService],
  controllers: [EnemiesController],
})
export class EnemiesModule {}
