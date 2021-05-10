import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";
import ModalExample from './Modal';

import { Card, CardBody, Row, Col } from "reactstrap";

class BuyingCard extends Component {
  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
          id="buying-card"
        >
<Card className="buyingcard">
  <CardBody className="buyingcard-body">
    <div className="styerr-number">
      <p id="styerr-number">5 STYERRS</p>
    </div>
    <div className="styerr-stamps">
      <div className="recommended">RECOMMENDED</div>
      <div className="off">-10% OFF</div>
    </div>
    <div className="styerr-price">
      <div className="int-number">
        <p id="int-number">2</p>
      </div>
      <div className="float-number">
        <p id="float-number"><b>.70</b></p>
        <p id="usd">USD</p>
      </div>
    </div>
    <div className="buy-button"><ModalExample /></div>
  </CardBody>
</Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  };
}

export default BuyingCard;
