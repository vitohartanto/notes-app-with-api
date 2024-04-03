import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Container = ({ logout, name, children }) => {
  return (
    <div>
      <Navbar name={name} logout={logout} />
      {children}
    </div>
  );
};

Container.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
