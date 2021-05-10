import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

import "./index.css";
import Queuelist from "./Examples/Queuelist";
import SearchBox from "../../../Layout/AppHeader/Components/SearchBox";

const Certification = (props) => {
  return (
    <Fragment>
      <div className="page-name">CERTIFY USERS</div>
      <div className="horizon-line"></div>
      <p id="explain">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <p id="queuelist"><b>Queue list</b></p>
        <Row id="queuerow">
          <Col lg="3">
            <br />
            <CardBody id="queue-list-table">
              <Queuelist />
            </CardBody>
          </Col>
        </Row>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Certification;

