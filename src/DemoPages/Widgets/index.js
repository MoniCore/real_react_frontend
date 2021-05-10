import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Dashboard Widgets

import WidgetsChartBoxes from "./ChartBoxes/";

// Layout
import Header from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';

const Widgets = ({match}) => (
    <Fragment>
        <Header/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Widgets */}

                    <Route path={`${match.url}/dashboard-boxes`} component={WidgetsChartBoxes}/>
                </div>
            </div>
        </div>

    </Fragment>
);

export default Widgets;