import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';

import './index.css';
import Staff_accounts from './Examples/Staff-account';
import SearchBox from '../../../Layout/AppHeader/Components/SearchBox';


const Accounts = (props) => {
    return (
        <Fragment>
            <div className="page-name">ACCOUNT MANAGEMENT</div>
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
                            <Staff_accounts/>
                        </CardBody>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default Accounts;
