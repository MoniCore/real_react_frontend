import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import BasicDashboard from './Basic/';

// Layout

import Header from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';

const Dashboards = () => (
    <Fragment>
        <Header/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <BasicDashboard/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Dashboards;