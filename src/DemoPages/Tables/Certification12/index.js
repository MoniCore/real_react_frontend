import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';

import './index.css';

const CertificationOneStep2 = (props) => {
    return (
        <Fragment>
            <div className="page-name">CERTICICATION</div>
            <div className="horizon-line"></div>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="12">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Answer each question correctly</CardTitle>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                
                                <div className="radio-container">
                                    <div className="radio">
                                        <input id="radio-1-1" name="question-1" type="radio" />&nbsp;
                                        <label for="radio-1-1" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>

                                    <div className="radio">
                                        <input id="radio-1-2" name="question-1" type="radio" />&nbsp;
                                        <label  for="radio-1-2" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>
                                    <div className="radio">
                                        <input id="radio-1-3" name="question-1" type="radio" />&nbsp;
                                        <label for="radio-1-3" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>

                                    <div className="radio">
                                        <input id="radio-1-4" name="question-1" type="radio" />&nbsp;
                                        <label  for="radio-1-4" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                
                                <div className="radio-container">
                                    <div className="radio">
                                        <input id="radio-2-1" name="question-2" type="radio" />&nbsp;
                                        <label for="radio-2-1" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>

                                    <div className="radio">
                                        <input id="radio-2-2" name="question-2" type="radio" />&nbsp;
                                        <label  for="radio-2-2" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>
                                    <div className="radio">
                                        <input id="radio-2-3" name="question-2" type="radio" />&nbsp;
                                        <label for="radio-2-3" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>

                                    <div className="radio">
                                        <input id="radio-2-4" name="question-2" type="radio" />&nbsp;
                                        <label  for="radio-2-4" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                                <div className="radio-container">
                                    <div className="radio">
                                        <input id="radio-3-1" name="question-3" type="radio" />&nbsp;
                                        <label for="radio-3-1" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>

                                    <div className="radio">
                                        <input id="radio-3-2" name="question-3" type="radio" />&nbsp;
                                        <label  for="radio-3-2" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>
                                    <div className="radio">
                                        <input id="radio-3-3" name="question-3" type="radio" />&nbsp;
                                        <label for="radio-3-3" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>

                                    <div className="radio">
                                        <input id="radio-3-4" name="question-3" type="radio" />&nbsp;
                                        <label  for="radio-3-4" className="radio-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                                    </div>
                                </div>
                                <br />
                                <div className="button-container">
                                    <a href="/#/tables/certification13"><Button className="mb-2 mr-2" color="primary">Send</Button></a>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default CertificationOneStep2;
