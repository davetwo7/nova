import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const handleChange = () => {

  }

  return (
    <div className="Navbar flex justify-between items-center bg-neutral-900 py-5 gap-8">
      <div className="Logo text-rose-50 font-satoshi-medium text-3xl hover:text-rose-500 tranform-transition duration-200"><Link to="/">Nova*</Link></div>
      <div className="search-bar bg-neutral-800 rounded-md flex w-full h-10 items-center justify-end">
        <input
          className="w-full outline-none text-neutral-400 bg-neutral-800 mx-4 font-satoshi-light"
          placeholder="Search..."
          onChange={handleChange}
          >
          </input>
        <FontAwesomeIcon className="text-rose-100 mr-4" icon={faMagnifyingGlass} />
      </div>
      <div className="Menu flex gap-8">
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1 hover:text-rose-400/90">
          <Link to="/discover">Discover</Link>
          <span className="block h-custom bg-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1 hover:text-violet-400/90">
          <Link to="genre">Genres</Link>
          <span className="block h-custom bg-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1  hover:text-sky-400/90">
          <Link to="/list">Lists</Link>
          <span className="block h-custom bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1 hover:text-green-400/90 transition-colors duration-150">
          <Link to="/community" className="">Community</Link>
          <span className="block h-custom bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="bg-neutral-800 w-8 h-8 rounded-full"></div>
      </div>
    </div>
  )
}


export default Navbar;