import Navbar from './Navbar';
import { Outlet } from "react-router-dom";

const Root = () => {

  return (
    <div className="bg-rose-500/9n0 h-screen">
      <div className="bg-rose-500/70  w-screen h-2"></div>
      <div className="bg-neutral-900 h-screen px-48 text-rose-50">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Root;
