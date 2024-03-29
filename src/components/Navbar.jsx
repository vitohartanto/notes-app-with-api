import { FaHome } from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ search, setSearch, setSearchParams }) => {
  return (
    <div className="flex justify-between items-center border-b-2 px-2 py-4">
      <Link to="/">
        <FaHome className="text-5xl" />
      </Link>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setSearchParams={setSearchParams}
      />
      <Link to="/archive">
        <RiArchiveDrawerFill className="text-5xl" />
      </Link>
    </div>
  );
};

Navbar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default Navbar;
