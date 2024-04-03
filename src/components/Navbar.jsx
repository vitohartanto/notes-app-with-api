import { FaHome } from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const Navbar = ({ logout, name }) => {
  return (
    <div className="flex justify-between items-center border-b-2 px-4 py-4 sm:px-8">
      <Link to="/">
        <FaHome className="text-5xl" />
      </Link>

      <Link to="/archive">
        <RiArchiveDrawerFill className="text-5xl" />
      </Link>

      <button onClick={logout} className="flex items-center">
        {name} <RiLogoutBoxRLine className="ml-1 text-5xl" />
      </button>
    </div>
  );
};

export default Navbar;
