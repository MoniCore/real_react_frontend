import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

import "./index.css";
import Businesslist1 from "./Examples/Businesslist1";
import Businesslist2 from './Examples/Businesslist2';
// import FactionSearch from "./FactionSearch/Factionsearch";

const Mybusiness = (props) => {
    return (
        <Fragment>
            <div className="page-name">MY BUSINESS</div>
            <div className="packs-horizon-line"></div>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row id="businessrow">
                    <Col lg="4" >
                        <CardBody>
                            <Businesslist1 />
                        </CardBody>
                    </Col>
                    <Col lg="4" id="between-table">
                        <div className="historybutton-group">
                            <Button className="mb-2 mr-2 shoppinghistory" color="primary">Shopping History</Button>
                            <Button className="mb-2 mr-2 internethistory" color="primary">Internet Transaction History</Button>
                        </div>
                        <div>
                            <Button className="mb-2 mr-2 vehicle-list" color="primary">Vehicle List</Button>
                        </div>
                        <div className="total-capital">
                            <p id="total-capital-text">Total Capital-643.335$</p>
                        </div>
                    </Col>
                    <Col lg="4">
                        <CardBody>
                            <Businesslist2 />
                        </CardBody>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default Mybusiness;