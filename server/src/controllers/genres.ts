import { Request, Response } from 'express';
import { getGenreAlbums } from "../models/genre.js";

export const fetchGenreAlbums = async (req: Request, res: Response) => {
  try {
    // console.log(req.params.genre)
    const response = await getGenreAlbums(req.params.genre);
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    throw error;
  }
}