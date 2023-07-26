import express, { Request, Response } from 'express';

export const discoverRoute = express.Router();

discoverRoute.get("/discover", (req: Request, res: Response) => {
  res.status(200).send("This is the discover route.")
})

discoverRoute.get("/discover/map", (req: Request, res: Response) => {
  res.status(200).send("This is the map route.")
})

discoverRoute.get("/discover/list", (req: Request, res: Response) => {
  res.status(200).send("This is the list route.")
})