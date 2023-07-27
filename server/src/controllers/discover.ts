import { Request, Response } from 'express';
import { getAllGenres } from "../models/genre.js";

export const getDiscoverMapData = async (req: Request, res: Response) => {
  try {
    const response = await getAllGenres();
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    throw error;
  }
}