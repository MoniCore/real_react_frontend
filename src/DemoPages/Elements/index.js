import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// BUTTONS

// Standard

import ButtonsStandard from './Button/Standard/';

// DROPDOWNS

import DropdownExamples from './Dropdowns/';

// BADGES & LABELS

import BadgesLabels from './BadgesLabels/';

// ICONS

import IconsExamples from './Icons/';

// CARDS

// import CardsExamples from './Cards/';

// LIST GROUP

import ListGroupExample from '../Elements/ListGroup/';

// NAVIGATION

import NavigationExample from './Navs/';

// UTILITIES

import UtilitiesExamples from '../Elements/Utilities/';

// Layout
import Header from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';

const Elements = ({match}) => (
    <Fragment>
        <Header/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    <Route path={`${match.url}/buttons-standard`} component={ButtonsStandard}/>
                    <Route path={`${match.url}/dropdowns`} component={DropdownExamples}/>
                    <Route path={`${match.url}/badges-labels`} component={BadgesLabels}/>
                    <Route path={`${match.url}/icons`} component={IconsExamples}/>
                    {/* <Route path={`${match.url}/characters`} component={CardsExamples}/> */}
                    <Route path={`${match.url}/list-group`} component={ListGroupExample}/>
                    <Route path={`${match.url}/navigation`} component={NavigationExample}/>
                    <Route path={`${match.url}/utilities`} component={UtilitiesExamples}/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Elements;