import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";
import EditPack from "./EditPack";

import { Card, CardBody, Row, Col } from "reactstrap";

class PackCard extends Component {
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
          id="pack-card"
        >
          <Card className="packcards">
              <div className="packs-container">
                <p id="pack-number"><b>PACK #1</b></p>
                <p id="number-styerr">5 STYERRS</p>
              </div>
              <div className="edit-button">
                <EditPack />
              </div>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default PackCard;
