import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Discover from './components/Discover/Discover';
// import Map from './components/Discover/Map';
import Community from './components/Community/Community';
import Lists from './components/Lists/Lists';
import Search from './components/Search/Search';
import { getNewestReleases } from './utils/FrontPage/NewestReleases';
import { genreLoader } from './utils/Genre/GenreLoader';
import Home from './components/Home';
import GenreDetails from './components/Genres/GenreDetails';
import Genres from './components/Genres/Genres';
import AlbumDetails from './components/Album/AlbumDetails';
import ReviewsList from './components/Review/ReviewsList';
import Feed from './components/Feed/Feed';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index loader={getNewestReleases} element={<Home/>}></Route>
      <Route path="discover" loader={genreLoader} element={<Discover />}></Route>
      <Route path="genre" loader={genreLoader} element={<Genres />}></Route>
      <Route path="genre/:genre" loader={genreLoader} element={<GenreDetails />}></Route>
      <Route path="album/:mbid" loader={genreLoader} element={<AlbumDetails/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      {/* <Route path="discover/map" loader={genreLoader} element={<Map />}></Route> */}
      <Route path="list" element={<Lists />}></Route>
      <Route path="reviews" element={<ReviewsList />}></Route>
      <Route path="community" element={<Community />} />
      <Route path="feed" element={<Feed />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
