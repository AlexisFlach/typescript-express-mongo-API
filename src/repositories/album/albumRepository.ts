import { IAlbum } from '../../interfaces/IAlbum';
import Album from '../../models/Album';
import { IAlbumRepository } from './IAlbumRepository';

export class AlbumRepository implements IAlbumRepository {
  public _db: typeof Album;

  constructor(db: typeof Album) {
    this._db = db;
  }

  saveItem = (item: any) => item.save();
  getAlbums = async () => {
    const albums = await this._db.find().exec();
    console.log(albums);
    return albums;
  };

  // getAlbum = (id: number) => this._db.filter((item: IAlbum) => item.id === id);

  createAlbum = (album: IAlbum) => {
    this.saveItem(album);
  };

  // updateAlbum = (id: number, album: IAlbum) => {
  //   const itemToUpdate = this.getAlbum(id);
  //   this._db[itemToUpdate[0].id - 1] = album;
  //   return this;
  // };

  // deleteAlbum = (id: number) => {
  //   this._db = this._db.filter((item: IAlbum) => item.id !== id);
  // };
}
