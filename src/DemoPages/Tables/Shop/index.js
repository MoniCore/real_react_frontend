import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";

import { Card, CardBody, Row, Col } from "reactstrap";
import BuyingCard from './Buyingcard.js';

class Shop extends Component {
  render() {
    return (
      <Fragment>
          <div className="page-name">SHOP</div>
          <div className="horizon-line"></div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
          id="shop-cards"
        >
          <Row>
            <Col md="6">
              <div>
                <p id="text-title">
                  Welcome to the Styerr Shop section. Here you will find different types of packages with which you can support our project and at same time receive a remuneration in exchange that does not interfere with our polices.
                </p>
              </div>
            </Col>
          </Row>
          <Row id="main-shop-cards">
            <Col md="6" id="styerr-col">
              <Card className="main-card mb-3" id="styerr-card">
                <CardBody>
                  <div className="styerrcoins">
                    <div className="title">
                      <p id="styerrs-coin">STYERRS COINS</p>
                    </div>
                    <div className="cards-container">
                        <BuyingCard />
                        <BuyingCard />
                        <BuyingCard />
                        <BuyingCard />
                        <BuyingCard />
                        <BuyingCard />
                        <BuyingCard />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" id="package-col">
              <Card className="main-card mb-3" id="package-card">
                <CardBody>
                <div className="styerrcoins">
                    <div className="title">
                      <p id="premium-packages">PERMIUM PACKAGES</p>
                    </div>
                    <div className="cards-container">
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  };
}

export default Shop;
