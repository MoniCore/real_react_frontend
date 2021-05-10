import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./index.css";
import logo from "../../assets/images/logos/logo.png";

class LoginHeader extends React.Component {
  render() {
    return (
      <div className="login-banner">
        <img className="login-logo-image" src={logo} />
        <p>
          <strong>Styerr</strong>
          <br />
          Network
        </p>
      </div>
    );
  }
}

export default LoginHeader;
