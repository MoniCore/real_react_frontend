import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Charts

import ChartsChartJs from "./ChartJs/";

// Layout

import Header from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';

const Charts = ({match}) => (
    <Fragment>
        <Header/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Charts */}

                    <Route path={`${match.url}/chartjs`} component={ChartsChartJs}/>

                </div>
            </div>
        </div>
    </Fragment>
);

export default Charts;