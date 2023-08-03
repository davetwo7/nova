import express, { Request, Response } from 'express';
import { fetchAlbumDetails } from '../controllers/album.js';
export const albumRoute = express.Router();

albumRoute.get("/album/:mbid", fetchAlbumDetails)