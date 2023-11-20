import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  imageAfter: string;
  @Prop({ required: true })
  characterName: string;
}

export const ImagesSchema = SchemaFactory.createForClass(Image);
