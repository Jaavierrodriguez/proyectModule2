import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { EnemiesModule } from './enemies/enemies.module';
import { GameModule } from './game/game.module';
import { SoundtrackModule } from './soundtrack/soundtrack.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImagesModule } from './images/images.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CharactersModule,
    EnemiesModule,
    GameModule,
    SoundtrackModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tlou'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ImagesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
