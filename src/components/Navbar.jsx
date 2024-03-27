import { FaHome } from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 px-2 py-4">
      <Link to="/">
        <FaHome className="text-5xl" />
      </Link>
      <SearchBar />
      <Link to="/archive">
        <RiArchiveDrawerFill className="text-5xl" />
      </Link>
    </div>
  );
};

export default Navbar;
