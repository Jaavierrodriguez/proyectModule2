import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CharactersSchema } from './characters.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Character',
        schema: CharactersSchema,
      },
    ]),
  ],
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
