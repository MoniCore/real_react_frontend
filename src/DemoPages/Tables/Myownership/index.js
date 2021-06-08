import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";

import { Card, CardBody, Row, Col } from "reactstrap";
import VehicleCard from "./Cards/VehicleCard";
import HouseCard from "./Cards/HouseCard";
import PremisesCard from './Cards/PremisesCard';

class Myownership extends Component {
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
          id="pack-cards"
        >
          <div className="page-name">VEHICLES</div>
          <div className="packs-horizon-line"></div>
          <Row>
            <Col md="7" id="vehicle-cards-container">
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
            </Col>
          </Row>
          <div className="page-name">HOUSES</div>
          <div className="packs-horizon-line"></div>
          <Row>
            <Col md="7" id="membership-cards-container">
              <HouseCard />
              <HouseCard />
              <HouseCard />
            </Col>
          </Row>
          <div className="page-name">PREMISES</div>
          <div className="packs-horizon-line"></div>
          <Row>
            <Col md="7" id="membership-cards-container">
              <PremisesCard />
              <PremisesCard />
              <PremisesCard />
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Myownership;
