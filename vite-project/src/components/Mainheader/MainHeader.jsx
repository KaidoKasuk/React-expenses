import "./MainHeader.css";
import Navigation from "./Navigation";
import PropTypes from "prop-types";
const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1>A typical Page</h1>
      <Navigation
        loggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      ></Navigation>
    </header>
  );
};

export default MainHeader;
