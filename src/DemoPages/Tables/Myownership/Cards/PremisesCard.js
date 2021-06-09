import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import "./index.css";
import EditMembership from "../EditMembership";

import { Card, CardBody, Row, Col } from "reactstrap";

class PremisesCard extends Component {
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
                <p id="premises_id"><b>Local id</b></p>
                <div id="premises-content">
                  <div><p>Location :</p><p></p></div>
                  <div><p>Linked Company :</p><p></p></div>
                  <div><p>Price :</p><p></p></div>
               </div> 
              </div>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default PremisesCard;
