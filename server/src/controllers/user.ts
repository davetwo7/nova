import { Request, Response } from 'express';
import { dbToggleUserAlbumLike } from '../models/user.js';

export const toggleUserAlbumLike = async (req: Request, res: Response) => {
  try {
    console.log('request body: ', req.body)
    const response = await dbToggleUserAlbumLike(req.body);
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    throw error;
  }
}