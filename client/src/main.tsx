import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Discover from './components/Discover';
import Map from './components/Map';
import Community from './components/Community';
import List from './components/List';

import { genreLoader } from './utils/GenreLoader';
import Home from './components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>}></Route>
      <Route path="discover" element={<Discover />}></Route>
      <Route path="discover/map" loader={genreLoader} element={<Map />}></Route>
      <Route path="discover/list" loader={genreLoader} element={<List />}></Route>
      <Route path="community" element={<Community />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
