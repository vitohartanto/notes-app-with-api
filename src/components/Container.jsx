import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Container = ({ search, setSearch, setSearchParams, children }) => {
  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        setSearchParams={setSearchParams}
      />
      {children}
    </div>
  );
};

Container.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
