import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  releaseDate: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  gameRating: string;

  @Prop({ required: true })
  developerEditor: string;

  @Prop({ required: true })
  platforms: string;

  @Prop({ required: true })
  sequel: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
