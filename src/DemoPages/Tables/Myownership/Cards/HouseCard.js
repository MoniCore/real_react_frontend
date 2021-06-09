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
                <p id="house_id"><b>House id</b></p>
                <div id="houses-content">
                  <div><p>Location :</p><p></p></div>
                  <div><p>Price :</p><p></p></div>
               </div> 
              </div>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default HouseCard;
