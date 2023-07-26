import express, { Request, Response } from 'express';

export const defaultRoute = express.Router();

defaultRoute.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is the front page route.")
})