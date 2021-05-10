import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";

import { Card, CardBody, Row, Col } from "reactstrap";

class Character extends Component {
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
          <Row>
            <Col md="4" id="character-col">
              <Card className="main-card mb-3" id="active-slot">
                <CardBody>
                  <p class="character1-title">Character 1</p>
                  <p className="character-name">Giancarlos Sarria</p>
                  <p className="PID">
                    PID: <span className="character-id">1337</span>
                  </p>
                  <p className="visit-date">
                    last visit date &nbsp;<span>2021-01-01</span>
                  </p>
                  <br />
                  <br />
                  <div className="character-stats">
                    <div className="stats">STATS:</div>
                    <div className="money">
                      <div>
                        <i class="fas fa-dollar-sign"></i>&nbsp;&nbsp; Money
                      </div>
                      <div className="money-letter">
                        <i class="fas fa-question-circle"></i>&nbsp;
                        <p id="money-number">$1389</p>
                      </div>
                    </div>
                    <div className="properties">
                      <div>
                        <i class="fas fa-laptop-house"></i>&nbsp; Properties
                      </div>
                      <div>
                        <i class="fas fa-question-circle"></i>&nbsp;1
                      </div>
                    </div>
                    <div className="vehicles">
                      <div>
                        <i class="fas fa-car-side"></i>&nbsp; Vehicles
                      </div>
                      <div>
                        <i class="fas fa-question-circle"></i>&nbsp;3
                      </div>
                    </div>
                    <div className="faction">
                      <div>
                        <i class="fas fa-users"></i>&nbsp; Faction
                      </div>
                      <div>N/A</div>
                    </div>
                    <div className="business">
                      <p>
                        <i class="fas fa-user-tie"></i>&nbsp; Business
                      </p>
                      <div>N/A</div>
                    </div>
                  </div>
                </CardBody>
                <div className="advanced-button">
                  <Button color="primary" id="slot1-button">
                    Advanced details
                  </Button>
                </div>
              </Card>
            </Col>
            <Col id="character-col">
              <Card className="main-card mb-3" id="slot">
                <CardBody>
                  <p className="secondcard-title">SLOT 2</p>
                  <p className="secondcard-subtitle">FREE</p>
                  <div className="plus-button">
                    <i className="fas fa-plus-circle fa-9x"></i>
                  </div>
                  <div className="plus-button">
                    <i className="fas fa-lock-open fa-9x"></i>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col id="character-col">
              <Card className="main-card mb-3" id="slot">
                <CardBody>
                  <p className="secondcard-title">SLOT 3</p>
                  <p className="secondcard-subtitle">BLOCKS</p>
                  <div className="plus-button">
                    <i className="fas fa-lock fa-9x"></i>
                  </div>
                  <div className="slot3-link">
                    <a>Why can't I create another character</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Character;
