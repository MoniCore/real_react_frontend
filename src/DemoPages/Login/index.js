import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import history from "../../history";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactSVG } from 'react-svg';
// import fingerprint from '/static/fontawesomes/fingerprint-duotone.svg';

// LOGIN PAGE
import Login from "../Login";

// Layout

import LoginHeader from "../../Layout/LoginHeader/";
import LoginFooter from "../../Layout/LoginFooter";

const BasicLogin = () => {
  const godashboard = () => {
  };

  return (
    <Fragment>
      <LoginHeader />
      <h1 id="authentication">AUTHORIZATION</h1>
      <div className="horizontal-line"></div>
      <div id="container">
        <div className="finger">
          <i className="fad fa-fingerprint fa-5x" />
        </div>
        <form className="login_form">
          <div className="login-input">
            <span>
              <i className="fas fa-user fa-1x" id="user-icon" />
            </span>
            <input
              type="email"
              className="user-input"
              name="email"
              placeholder="Username"
            />
          </div>
          <div className="login-input">
            <span>
              <i className="fas fa-key fa-1x" id="user-icon" />
            </span>
            <input
              type="password"
              className="user-input"
              name="password"
              placeholder="Password"
            />
          </div>
          <span id="forgotten">Did you forget password?</span>
          <div className="login-button">
            <a href="/#/tables/home" className="btn btn-white btn-animate">log in</a>
          </div>
          <p id="is-account">
            Don't you have an account yet?&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/#/register" id="to-register">Register now</a>
          </p>
        </form>
      </div>
      <LoginFooter />
    </Fragment>
  );
};

export default BasicLogin;
