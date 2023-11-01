import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EnemiesDocument = Enemies & Document;

@Schema()
export class Enemies {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  types: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;
}

export const EnemiesSchema = SchemaFactory.createForClass(Enemies);
