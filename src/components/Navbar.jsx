import { FaHome } from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 px-4 py-4 sm:px-8">
      <Link to="/">
        <FaHome className="text-5xl" />
      </Link>

      <Link to="/archive">
        <RiArchiveDrawerFill className="text-5xl" />
      </Link>
    </div>
  );
};

Navbar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setSearchParams: PropTypes.func,
};

export default Navbar;
