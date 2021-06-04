import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

import "./index.css";
import Factionlist from "./Examples/Factionlist";
import FactionSearch from "./FactionSearch/Factionsearch";

const Myfaction = (props) => {
  return (
    <Fragment>
      <div className="page-name">MY FACTION</div>
      <div className="packs-horizon-line"></div>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Row id="factionrow">
          <Col lg="5">
            <br />
            <CardBody>
              <FactionSearch />
              <Factionlist />
            </CardBody>
          </Col>
          <Col lg="5">
            <div>
              <p id="faction-name">Fluseen</p>
              <Card className="faction-info social-area">
                <p>jlkdjlksjdlf</p>
              </Card>
              <div className="underinfo">
                <Card className="faction-infos social-area">
                  <div className="faction-info-items"><p>Online:</p></div>
                  <div className="faction-info-items"><p>Duty:</p></div>
                  <div className="faction-info-items"><p>Vehicle:</p></div>
                  <div className="faction-info-items"><p>Total members:</p></div>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Myfaction;

