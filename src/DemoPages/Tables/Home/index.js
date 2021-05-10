import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Progress
} from "reactstrap";

import "./index.css";

import avatar1 from "../../../assets/utils/images/avatars/4.jpg";

const Home = (props) => {
  return (
    <Fragment>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
        id="account-body"
      >
        <Row className="home-container-top">
          <Col lg="6" id="user-card-container">
            <Card className="main-card mb-3" id="home-account-card">
              <CardBody>
                <div className="isactive"></div>
                <div className="account-image">
                  <img
                    width={120}
                    className="rounded-circle"
                    src={avatar1}
                    alt=""
                  />
                  <i className="fas fa-camera-retro" id="camera-icon"></i>
                </div>
                <div>
                  <p className="account-name">Flussen (UID)</p>
                  <p className="role">Administrator</p>
                </div>
                <div className="account-info">
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
                      <div className="live-plus">
                        <div>
                          <p className="character-number">1</p>
                        </div>
                        <div>
                          <i className="fas fa-plus-circle"></i>
                        </div>
                      </div>
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
            <div className="button-certify">
              <a href="/#/tables/certification1">
              <Button className="mb-2 mr-2" color="primary">
                Certify me
              </Button>
              </a>
            </div>
          </Col>
          <Col lg="4" className="panels-card-container">
            <Card className="panels-card-1">
              <CardBody className="discord-content">
                <div id="discord-sentence">
                  Link your Discord account with our system
                </div>
                <div>
                  <i className="fab fa-discord fa-5x"></i>
                </div>
              </CardBody>
            </Card>
            <br />
            <br />
            <Card className="panels-card">
              <CardBody className="panels-card-body">
                <p id="panel1">
                  Panel<strong>(S1)</strong>
                </p>
                <p id="underground">Underground Mutiplayer</p>
              </CardBody>
            </Card>
            <br />
            <br />
            <Card className="panels-card">
              <CardBody className="panels-card-body">
                <p id="panel1">
                  Panel<strong>(S1)</strong>
                </p>
                <p id="underground">Underground Mutiplayer</p>
              </CardBody>
            </Card>
            <br />
            <br />
          </Col>
        </Row>
        <Row className="home-container-bottom">
          <Col lg="6">
            <br />
            <div id="bottom-horizon"></div>
            <p id="last-entries">LAST ENTRIES</p>
            <Row>
              <Col lg="3">
                <Card className="main-card mb-3" id="account-datas">
                  <CardBody></CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card className="main-card mb-3" id="account-datas">
                  <CardBody></CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card className="main-card mb-3" id="account-datas">
                  <CardBody></CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <p className="social-media">SOCIAL MEDIA</p>
            <div className="link-icons">
              <i className="fab fa-facebook fa-5x"></i>
              <i className="fab fa-teamspeak fa-5x"></i>
              <i className="fab fa-discord fa-5x"></i>
            </div>
            <Card className="social-area">
              <CardBody className="panels-card-body"></CardBody>
            </Card>
          </Col>
        </Row>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Home;
