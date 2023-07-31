import express, { Request, Response } from 'express';
import { searchDB } from '../models/search.js';
export const defaultRoute = express.Router();

defaultRoute.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is the front page route.")
})

defaultRoute.get("/search", async (req: Request, res: Response) => {


  const { searchValue, searchType } = req.query;

  if (typeof searchValue !== 'string' || (searchType && typeof searchType !== 'string')) {
    res.status(400).send("searchValue and searchType must be strings");
    return;
  }

  console.log(searchValue)
  console.log(searchType)
  const results = await searchDB(searchValue, searchType)
  res.status(200).send(results)
})