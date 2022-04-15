import { Document } from 'mongoose';

export interface IArtist extends Document {
  name: string;
  albums: [];
}
