
import { useEffect } from 'react';

import Navbar from './Navbar';
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Root = () => {

  return (
    <div className="bg-rose-800 h-screen">
      <div className="bg-gradient-to-t to-rose-700/60 from-rose-700 w-screen h-2"></div>
      <div className="bg-neutral-900 h-screen px-48 text-rose-50">
      {/* <span className="bg-rose-800 h-screen w-screen"> tes</span> */}
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Root;
