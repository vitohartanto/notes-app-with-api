import { FaHome } from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useContext } from "react";
import AuthedUserContext from "../contexts/AuthedUserContext";
import PropTypes from "prop-types";

const Navbar = ({ logout, name }) => {
  const authedUser = useContext(AuthedUserContext);

  return (
    <div>
      {authedUser ? (
        <div className="navigation-bar flex justify-between items-center border-b-2  px-4 py-4 sm:px-8">
          <Link to="/">
            <FaHome className="text-5xl" />
          </Link>

          <Link to="/archive">
            <RiArchiveDrawerFill className="text-5xl" />
          </Link>

          <LanguageToggle />
          <ThemeToggle />

          <button onClick={logout} className="flex items-center">
            {name} <RiLogoutBoxRLine className="ml-1 text-5xl" />
          </button>
        </div>
      ) : (
        <div className="navigation-bar flex justify-end items-center border-b-2  px-4 py-4 sm:px-8">
          <div className="mx-4">
            <LanguageToggle />
          </div>
          <div className="mx-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Navbar;
