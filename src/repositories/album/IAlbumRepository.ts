import { IAlbum } from '../../interfaces/IAlbum';
import { IArtist } from '../../interfaces/IArtist';

export interface IAlbumRepository {
  getAlbums: () => any;
  // getAlbum: (id: number) => IAlbum;
  createAlbum: (album: IAlbum) => void;
  saveItem: (item: any) => any;
  // updateAlbum: (id: number, album: IAlbum) => void;
  // deleteAlbum: (id: number) => void;
}
