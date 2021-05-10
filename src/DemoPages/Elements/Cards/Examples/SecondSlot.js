import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardHeader,
  CardFooter,
} from "reactstrap";

class CharacterSlot_2 extends Component {
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
          id="cards"
        >
          <Card className="main-card mb-3" id="slot">
            <CardBody>
              <p className="secondcard-title">SLOT 2</p>
              <p className="secondcard-subtitle">FREE</p>
              <div className="plus-button">
                <i className="fas fa-plus-circle fa-9x"></i>
              </div>
              <div className="plus-button">
                <i className="fas fa-lock-open-alt fa-9x"></i>
              </div>
            </CardBody>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default CharacterSlot_2;
