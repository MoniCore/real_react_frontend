import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Progress,
} from "reactstrap";

import "./index.css";

import avatar1 from "../../../assets/utils/images/avatars/4.jpg";

const AccountStep2 = (props) => {
  return (
    <Fragment>
      <div className="page-name">MANAGE OF ACCOUNTS</div>
      <div className="horizon-line"></div>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
        id="account-body"
      >
        <div>
          <Row>
            <Col lg="3">
              <Card
                className="main-card mb-3"
                id="account-card"
              >
                <CardBody>
                  <div className="isactive"></div>
                  <div className="account-image">
                    <img
                      width={120}
                      className="rounded-circle"
                      src={avatar1}
                      alt=""
                    />
                    <i className="fas fa-camera-retro" id="camera-icon"><input type="file"></input></i>
                  </div>

                  <div>
                    <p className="account-name">Flussen (UID)</p>
                    <p className="role">Administrator</p>
                  </div>
                  <div className="account-info-1">
                    <div className="column1">
                      <div className="column1-1">
                        <div className="column1-1-1">
                          <b>+0</b>
                          <br />
                          Role point
                        </div>
                        <div className="column1-1-2">
                          <b>-0</b>
                          <br />
                          Role point
                        </div>
                      </div>
                      <div className="column1-2">
                        <p>Characters</p>
                        <p className="character-number">1</p>
                      </div>
                    </div>
                    <div className="column2">
                      <div className="column2-1">
                        <div className="column2-1-1">
                          <p className="level-number">15</p>
                          <p>level</p>
                          <Progress
                            className="progress-bar-sm progress-bar-animated-alt"
                            id="level-bar"
                            color="warning"
                            value="69"
                          />
                          <p>69%</p>
                        </div>
                        <div className="column2-1-2">
                          <p id="certi-level">2&deg;</p>
                          <p>Certification level</p>
                        </div>
                      </div>
                      <div className="column2-2">
                        <div className="sanction-title">
                          <p id="sanction">
                            <b>Sanctions</b>
                          </p>
                        </div>
                        <div className="jail">
                          <p>Jail</p>
                          <p>0</p>
                        </div>
                        <div className="warning">
                          <p>Warning</p>
                          <p>0</p>
                        </div>
                        <div className="expulsion">
                          <p>Expulsion</p>
                          <p>0</p>
                        </div>
                        <div className="temporary">
                          <p>Lock Temporary</p>
                          <p>0</p>
                        </div>
                        <div className="mute">
                          <p>Mute</p>
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="main-card mb-3" id="action-buttons">
                <CardBody>
                  <p id="options">Options</p>
                  <div className="button-container">
                    <Button className="mb-2 mr-2" color="primary">
                      Update data
                    </Button>
                    <Button className="mb-2 mr-2" color="primary">
                      Certification
                    </Button>
                    <Button className="mb-2 mr-2" color="primary">
                      Character update
                    </Button>
                    <Button className="mb-2 mr-2" color="danger">
                      Ban account
                    </Button>
                    <Button className="mb-2 mr-2" color="danger">
                      Delete account
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3" id="account-data">
                <CardBody>
                  <p id="user-data">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod{" "}
                  </p>
                  <hr />
                  <p id="user-data">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod{" "}
                  </p>
                  <hr />
                  <p id="user-data">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod{" "}
                  </p>
                  <hr />
                  <div className="button-container"></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default AccountStep2;
