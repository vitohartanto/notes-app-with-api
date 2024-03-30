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
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setSearchParams: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Container;
