import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { EnemiesModule } from './enemies/enemies.module';
import { GameModule } from './game/game.module';
import { SoundtrackModule } from './soundtrack/soundtrack.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CharactersModule,
    EnemiesModule,
    GameModule,
    SoundtrackModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tlou'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
