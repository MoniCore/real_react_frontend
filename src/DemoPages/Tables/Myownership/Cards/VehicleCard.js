import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import "./index.css";
// import EditPack from "./EditPack";

import { Card, CardBody, Row, Col } from "reactstrap";

class VehicleCard extends Component {
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
          id="vehicle-card"
        >
          <Card className="vehiclecards">
              <div className="vehicles-container">
                <div className="vehicle-card-left">
                  <p className="vehicle-name">Vehicle Name</p>
                  <div><p>Key number : </p><p> 312415</p></div>
                  <div><p>Registration :</p><p> </p></div>
                  <div><p>Current position :</p><p></p></div>
                  <div><p>Price :</p><p></p></div>
                  <div><p>Primary color :</p><p></p></div>
                  <div><p>Secondary color :</p><p></p></div>
                  <Button className="document-button">Documentation</Button>
                </div>
                <div className="vehicle-card-right">

                </div>
              </div>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default VehicleCard;
