import React from "react";
import Ausiliary from "../../hoc/Ausiliary";

const Layout = (props) => (
  <Ausiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Ausiliary>
);

export default Layout;
