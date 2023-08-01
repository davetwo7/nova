import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Discover from './components/Discover/Discover';
import Map from './components/Discover/Map';
import Community from './components/Community/Community';
import Lists from './components/Lists/Lists';

import { genreLoader } from './utils/GenreLoader';
import Home from './components/Home';
import GenreDetails from './components/Genres/GenreDetails';
import Genres from './components/Genres/Genres';
import AlbumDetails from './components/Album/AlbumDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>}></Route>
      <Route path="discover" loader={genreLoader} element={<Discover />}></Route>
      <Route path="genre" loader={genreLoader} element={<Genres />}></Route>
      <Route path="genre/:genre" loader={genreLoader} element={<GenreDetails />}></Route>
      <Route path="album/:album" loader={genreLoader} element={<AlbumDetails/>}></Route>
      {/* <Route path="discover/map" loader={genreLoader} element={<Map />}></Route> */}
      <Route path="list" loader={genreLoader} element={<Lists />}></Route>
      <Route path="community" element={<Community />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
