import React, { Fragment } from "react";
import cx from "classnames";
import $ from "jquery";

import { connect } from "react-redux";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import UserBox from "./Components/UserBox";

import HeaderLogo from "../AppLogo";
import "./index.css";
import logo from "../../assets/images/logos/logo.png";

class Header extends React.Component {
  componentDidMount() {
    var nav = $("nav");
    var line = $("<div />").addClass("line");

    line.appendTo(nav);

    var active = nav.find(".active");
    var pos = 0;
    var wid = 0;

    if (active.length) {
      pos = active.position().left;
      wid = active.width();
      line.css({
        left: pos,
        width: wid,
      });
    }

    nav.find("ul li a").click(function (e) {
      e.preventDefault();
      if (!$(this).parent().hasClass("active") && !nav.hasClass("animate")) {
        nav.addClass("animate");

        var _this = $(this);

        nav.find("ul li").removeClass("active");

        var position = _this.parent().position();
        var width = _this.parent().width();

        if (position.left >= pos) {
          line.animate(
            {
              width: position.left - pos + width,
            },
            300,
            function () {
              line.animate(
                {
                  width: width,
                  left: position.left,
                },
                150,
                function () {
                  nav.removeClass("animate");
                }
              );
              _this.parent().addClass("active");
            }
          );
        } else {
          line.animate(
            {
              left: position.left,
              width: pos - position.left + wid,
            },
            300,
            function () {
              line.animate(
                {
                  width: width,
                },
                150,
                function () {
                  nav.removeClass("animate");
                }
              );
              _this.parent().addClass("active");
            }
          );
        }

        pos = position.left;
        wid = width;
      }
    });
  }
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
          id="total-appheader"
        >
          <div className="left-top-nav">
            <HeaderLogo />
            <div className="banner">
              <img className="logo_image" src={logo} />
              <p>
                <b>Styerr</b>
                <br />
                Network
              </p>
            </div>
          </div>
          <div className="home-forum">
            <nav>
              <ul>
                <li className="active">
                  <a href="/#/tables/home">Home</a>
                </li>
                <li>
                  <a href="/#/">Forum</a>
                </li>
              </ul>
            </nav>
            <UserBox />
          </div>
        </ReactCSSTransitionGroup>
        <div
          className={cx("app-header__content", {
            "header-mobile-open": enableMobileMenuSmall,
          })}
        ></div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
