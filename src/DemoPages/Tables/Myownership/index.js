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
          <div className="ownership-titles first-ownership-title">VEHICLES</div>
          <div className="ownership-horizon-line"></div>
          <div id="vehicle-row">
            <Col id="vehicle-cards-container">
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
          </div>
          <div className="ownership-titles">HOUSES</div>
          <div className="ownership-horizon-line"></div>
          <div className="houses-cards-containers">
            <Col id="houses-cards-container">
              <HouseCard />
              <HouseCard />
              <HouseCard />
            </Col>
          </div>
          <div className="ownership-titles">PREMISES</div>
          <div className="ownership-horizon-line"></div>
          <div className="promises-cards-containers">
            <Col id="promises-cards-container">
              <PremisesCard />
              <PremisesCard />
              <PremisesCard />
            </Col>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Myownership;
