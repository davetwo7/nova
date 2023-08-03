import express from 'express';
import { discoverRoute } from './discover.js';
import { defaultRoute } from './default.js';
import { userRoute } from './user.js';
import { albumRoute } from './album.js';

const routes = express.Router();

routes.use(userRoute);
routes.use(albumRoute)
routes.use(defaultRoute);
routes.use(discoverRoute);

export default routes;