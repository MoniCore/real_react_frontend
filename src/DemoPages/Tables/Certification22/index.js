import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

import "./index.css";

const Certification22 = (props) => {
  return (
    <Fragment>
      <div className="page-name">CERTICICATION: LEVEL 2</div>
      <div className="horizon-line"></div>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Row>
          <Col lg="8">
            <CardTitle>
              I answered the following test with your own words, expand on your
              answers
            </CardTitle>
            {/* <TableExample/> */}
            <div className="question">
              <p>
                1) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <textarea
                className="certification-text"
                type="text"
                placeholder="Answer the question"
              ></textarea>
            </div>
            <div className="question">
              <p>
                2) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <textarea
                className="certification-text"
                type="text"
                placeholder="Answer the question"
              ></textarea>
            </div>
            <br />
            <div className="button-container">
              <Button className="mb-2 mr-2" color="primary">
                Send
              </Button>
            </div>
          </Col>
        </Row>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Certification22;
