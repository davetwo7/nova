import { Request, Response } from 'express';
import { getAlbumDetails } from '../models/album.js';

export const fetchAlbumDetails = async (req: Request, res: Response) => {
  try {
    console.log(req.params)
    const response = await getAlbumDetails(req.params.mbid);
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    res.status(404).send('test')
  }
}