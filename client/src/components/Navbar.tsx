import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const handleChange = () => {

  }

  return (
    <div className="Navbar flex justify-between items-center bg-neutral-900 py-5 gap-5">
      <div className="Logo text-rose-50 font-satoshi-medium text-3xl hover:text-rose-500 tranform-transition duration-200"><Link to="/">Nova*</Link></div>
      <div className="search-bar bg-neutral-600 rounded-md flex w-full h-10 items-center justify-end">
        <input
          className="w-full outline-none text-rose-100 bg-neutral-600 mx-4 font-satoshi-light"
          placeholder="Search..."
          onChange={handleChange}
          >
          </input>
        <FontAwesomeIcon className="text-rose-100 mr-4" icon={faMagnifyingGlass} />
      </div>
      <div className="Menu flex gap-8">
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1">
          <Link to="/discover">Discover</Link>
          <span className="block h-0.5 bg-rose-500/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1">
          <Link to="/">Charts</Link>
          <span className="block h-0.5 bg-blue-500/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1">
          <Link to="/community">Lists</Link>
          <span className="block h-0.5 bg-green-500/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
        <div className="group text-rose-50 text-lg font-satoshi-medium link-hover-underline mt-1">
          <Link to="/community">Community</Link>
          <span className="block h-0.5 bg-yellow-500/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/>
        </div>
      </div>
    </div>
  )
}


export default Navbar;