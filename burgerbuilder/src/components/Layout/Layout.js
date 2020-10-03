import React from "react";
import Ausiliary from "../../hoc/Ausiliary";
import classes from "./Layout.css";

const Layout = (props) => (
  <Ausiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Ausiliary>
);

export default Layout;
