import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";

import { Card, CardBody, Row, Col } from "reactstrap";
import PackCard from "./PackCard.js";
import MemCard from "./MemCard";

class CoinPacks extends Component {
  render() {
    return (
      <Fragment>
        <div className="page-name">COIN PACKS</div>
        <div className="packs-horizon-line"></div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
          id="pack-cards"
        >
          <Row>
            <Col md="7" id="pack-cards-container">
              <PackCard />
              <PackCard />
              <PackCard />
            </Col>
          </Row>
        <div className="page-name">PREMIUM MEMBERSHIPS</div>
        <div className="packs-horizon-line"></div>
          <Row>
            <Col md="7" id="membership-cards-container">
              <MemCard />
              <MemCard />
              <MemCard />
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default CoinPacks;
