import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

Container.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setSearchParams: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Container;
