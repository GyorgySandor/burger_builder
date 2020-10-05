import React from "react";
import Ausiliary from "../../hoc/Ausiliary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Ausiliary>
    <Toolbar>Toolbar, SideDrawer, Backdrop</Toolbar>
    <main className={classes.Content}>{props.children}</main>
  </Ausiliary>
);

export default Layout;
