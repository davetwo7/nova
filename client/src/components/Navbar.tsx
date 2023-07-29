import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="Navbar flex justify-between items-center bg-stone-300 py-5 ">
      <div className="Logo text-black font-satoshi-regular text-3xl">Nova*</div>
      <div className="Menu flex gap-5">
        <div className="group text-black text-lg font-satoshi-medium link-hover-underline">
          <Link to="/discover">Discover</Link>
          <span className="block h-0.5 bg-stone-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-black text-lg font-satoshi-medium link-hover-underline">
          <Link to="/">Charts</Link>
          <span className="block h-0.5 bg-stone-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-black text-lg font-satoshi-medium link-hover-underline">
          <Link to="/community">Lists</Link>
          <span className="block h-0.5 bg-stone-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-black text-lg font-satoshi-medium link-hover-underline">
          <Link to="/community">Community</Link>
          <span className="block h-0.5 bg-stone-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
      </div>
    </div>
  )
}


export default Navbar;