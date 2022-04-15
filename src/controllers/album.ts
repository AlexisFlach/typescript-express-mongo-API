import { Request, Response } from 'express';
import { AlbumRepository } from '../repositories/album/albumRepository';
import Album from '../models/Album';
import mongoose from 'mongoose';
const repo = new AlbumRepository(Album);

export const getAllAlbums = async (req: Request, res: Response) => {
  const albums = await repo.getAlbums();
  res.status(200).send({ albums });
};

export const createAlbum = (req: Request, res: Response) => {
  const { title } = req.body;

  const album = new Album({
    _id: new mongoose.Types.ObjectId(),
    title,
  });

  const save = repo.createAlbum(album);

  return res.status(201).send({
    album: save,
  });
};
