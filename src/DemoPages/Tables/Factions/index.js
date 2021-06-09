import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

import "./index.css";
import Factiontable1 from "./Examples/Factiontable1";
import Factiontable2 from './Examples/Factiontable2';

const Factions = (props) => {
    return (
        <Fragment>
            <div className="page-name">MANAGE : FACTION</div>
            <div className="packs-horizon-line"></div>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row id="factionsrow">
                    <Col lg="4" >
                        <CardBody>
                            <Factiontable1 />
                        </CardBody>
                    </Col>
                    <Col lg="4">
                        <CardBody>
                            <Factiontable2 />
                        </CardBody>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default Factions;