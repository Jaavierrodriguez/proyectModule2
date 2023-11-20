import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CharactersDocument = Characters & Document;

@Schema()
export class Characters {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true })
  age: string;

  @Prop({ required: true })
  birth: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;
}

export const CharactersSchema = SchemaFactory.createForClass(Characters);
