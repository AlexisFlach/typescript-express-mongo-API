import mongoose, { Schema } from 'mongoose';
import { IAlbum } from '../interfaces/IAlbum';

const AlbumSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    // artist: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Artist',
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAlbum>('Album', AlbumSchema);
