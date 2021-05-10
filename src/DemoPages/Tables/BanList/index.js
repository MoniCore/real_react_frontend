import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';

import './index.css';
import Banlist from './Examples/Banlist';
import SearchBox from '../../../Layout/AppHeader/Components/SearchBox';


const Certification2 = (props) => {
    return (
        <Fragment>
            <div className="page-name">LOCKS</div>
            <div className="horizon-line"></div>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="12"><br />
                    <SearchBox id="searchbox"/>
                        <CardBody>
                            <Banlist/>
                        </CardBody>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default Certification2;
