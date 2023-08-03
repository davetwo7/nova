import express, { Request, Response } from 'express';
import { toggleUserAlbumLike } from '../controllers/user.js';
export const userRoute = express.Router();

userRoute.post("/user/liked-albums", toggleUserAlbumLike)
