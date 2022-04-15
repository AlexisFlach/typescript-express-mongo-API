import mongoose, { Schema } from 'mongoose';
import { IArtist } from '../interfaces/IArtist';

const ArtistSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    albums: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IArtist>('Artist', ArtistSchema);
