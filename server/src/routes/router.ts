import express from 'express';
import { discoverRoute } from './discover.js';
import { defaultRoute } from './default.js';

const routes = express.Router();

routes.use(defaultRoute);
routes.use(discoverRoute);

export default routes;