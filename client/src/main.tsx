import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Discover from './components/sections/Discover/Discover';
import Map from './components/sections/Discover/Map';
import Community from './components/sections/Community';
import List from './components/sections/Discover/List';

import { genreLoader } from './utils/GenreLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="discover" element={<Discover />}></Route>
      <Route path="discover/map" loader={genreLoader} element={<Map/>}></Route>
      <Route path="discover/list" loader={genreLoader} element={<List/>}></Route>
      <Route path="community" element={<Community />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
