import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import "./index.css";
import EditMembership from "../EditMembership";

import { Card, CardBody, Row, Col } from "reactstrap";

class HouseCard extends Component {
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
                <p id="pack-number"><b>PLAN #1</b></p>
                <div id="pack-number-content">
                  <div id="number-styerr">1 WEEKS</div>
                  <div id="coins-styerrs">15 styerrs</div>
               </div> 
              </div>
              <div className="edit-button">
                <EditMembership />
              </div>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default HouseCard;
