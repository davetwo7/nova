
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Root = () => {

  return (
    <div className="px-16 bg-stone-300">
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Root;
