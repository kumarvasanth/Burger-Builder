import React from "react";
import logo from "../burger.jpg";
import classes from "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={classes.nav}>
        <img src={logo} alt="City Tours" style={{ height: 50 }}></img>

        <ul className={classes.navlinks}>
          <li>
            <a href="/" className={classes.navlink}>
              Home
            </a>
          </li>
          <li>
            <a href="/" className={classes.navlink}>
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
