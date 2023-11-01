import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SoundTrackDocument = SoundTrack & Document;

@Schema()
export class SoundTrack {
  @Prop({ required: true })
  composition: string;

  @Prop({ required: true })
  musicStyle: string;

  @Prop({ required: true })
  notableThemes: string;

  @Prop({ required: true })
  awards: string;
}

export const SoundTrackSchema = SchemaFactory.createForClass(SoundTrack);
