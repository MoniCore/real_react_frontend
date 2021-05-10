import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";

import {
  MainNav,
  ComponentsNav,
  FormsNav,
  WidgetsNav,
  ChartsNav,
} from "./NavItems";

class Nav extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div >
          <div>
            <h5 className="app-sidebar__heading">STAFF</h5>
            <MetisMenu
              content={ComponentsNav}
              activeLinkFromLocation
              className="vertical-nav-menu"
              iconNamePrefix=""
              classNameStateIcon="pe-7s-angle-down"
            />
          </div>
        </div>
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
