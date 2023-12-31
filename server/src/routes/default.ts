import express, { Request, Response, response } from 'express';
import { searchDB } from '../models/search.js';
import { getNewestReleases, getPopularReleases } from '../models/frontpage.js';
export const defaultRoute = express.Router();

type SearchType = 'album' | 'artist' | 'genre' | null;

defaultRoute.get("/", async (req: Request, res: Response) => {
  const response1 = await getNewestReleases();
  const response2 = await getPopularReleases();
  const response = {newest: response1, popular: response2}
  console.log('these are the newest releases: ', response)
  res.status(200).send(response)
})

defaultRoute.get("/search", async (req: Request, res: Response) => {
  const { searchValue, searchType } = req.query;

  if (typeof searchValue !== 'string' || (searchType && typeof searchType !== 'string')) {
    res.status(400).send("searchValue and searchType must be strings");
    return;
  }

  // if (searchType && (typeof searchType !== "String" || searchType !== null)) {
  //   res.status(400).send("Error");
  //   return;
  // }
  console.log(searchValue)
  console.log(searchType)
  const results = await searchDB(searchValue, searchType as SearchType)
  res.status(200).send(results)
})