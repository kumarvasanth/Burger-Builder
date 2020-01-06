import React from "react";
import Aux from "../hoc/Auxiliary";
import classes from "./Layout.css";
import Navbar from "./NavBar";

const Layout = props => (
  <Aux>
    <Navbar></Navbar>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);
export default Layout;
