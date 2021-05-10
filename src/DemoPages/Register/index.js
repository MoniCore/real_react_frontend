import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import "./register.css";

// LOGIN PAGE
import Login from "../Login";

// Layout

import LoginHeader from "../../Layout/LoginHeader/";
import LoginFooter from "../../Layout/LoginFooter/";

const BasicLogin = () => (
  <Fragment>
    <LoginHeader />
    <h1 id="authentication">REGISTER</h1>
    <div className="horizontal-line"></div>
    <div id="container">
      <div className="user-lock">
        <i className="fas fa-user-lock fa-5x" id="user-lock-icon" />
      </div>

      <form className="login_form">
        <div className="regist-input">
          <span>
            <i className="fas fa-at" id="user-icon" />
          </span>
          <input
            type="email"
            className="user-input"
            name="email"
            placeholder="E-Mail"
          />
        </div>
        <div className="regist-input">
          <span>
            <i className="fas fa-at" id="user-icon" />
          </span>
          <input
            type="email"
            className="user-input"
            name="confirm-email"
            placeholder="Confirm E-Mail"
          />
        </div>
        <div className="regist-input">
          <span>
            <i className="fas fa-user fa-1x" id="user-icon" />
          </span>
          <input
            type="text"
            className="user-input"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="regist-input">
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
        <div className="regist-input">
          <span>
            <i className="fas fa-key fa-1x" id="user-icon"/>
          </span>
          <input
            type="password"
            className="user-input"
            name="confirm-password"
            placeholder="Confrim Password"
          />
        </div>
        <div className="regist-button" href="#">
          REGISTER
        </div>
        <p id="is-account">
          Do you have an account yet?&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#/login" id="to-login">Click here</a>
        </p>
        <p id="is-account"></p>
      </form>
    </div>
    <LoginFooter />
  </Fragment>
);

export default BasicLogin;
