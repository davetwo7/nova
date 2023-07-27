import express, { Request, Response } from 'express';
import { getDiscoverMapData } from '../controllers/discover.js';

export const discoverRoute = express.Router();

discoverRoute.get("/discover", (req: Request, res: Response) => {
  res.status(200).send("This is the discover route.")
})

discoverRoute.get("/discover/map", getDiscoverMapData)

discoverRoute.get("/discover/list", (req: Request, res: Response) => {
  res.status(200).send("This is the list route.")
})