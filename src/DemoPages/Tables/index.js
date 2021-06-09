import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Tables
import Home from './Home';
import Certification12 from './Certification12';
import Certification from './Certification';
import Certification13 from './Certification13';
import Certification22 from './Certification22';
import Accounts from './Accounts';
import BanList from './BanList';
import AccountStep2 from './AccountStep2';
import Character from './Character';
import Shop from './Shop';
import CoinPacks from './CoinPacks';
import Certification1 from './Certification1';
import Infrastructure from './Infrastructure';
import Myfaction from './Myfaction';
import Mybusiness from './Mybusiness';
import Myownership from './Myownership';
import Factions from './Factions';
// Layout

import Header from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';

const Tables = ({match}) => (
    <Fragment>
        <Header/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/certification`} component={Certification}/>
                    <Route path={`${match.url}/certification1`} component={Certification1}/>
                    <Route path={`${match.url}/certification12`} component={Certification12}/>
                    <Route path={`${match.url}/certification13`} component={Certification13}/>
                    <Route path={`${match.url}/certification22`} component={Certification22}/>
                    <Route path={`${match.url}/accounts`} component={Accounts}/>
                    <Route path={`${match.url}/banlist`} component={BanList}/>
                    <Route path={`${match.url}/account-step2`} component={AccountStep2}/>
                    <Route path={`${match.url}/home`} component={Home}/>
                    <Route path={`${match.url}/character`} component={Character}/>
                    <Route path={`${match.url}/shop`} component={Shop}/>
                    <Route path={`${match.url}/coinpacks`} component={CoinPacks}/>
                    <Route path={`${match.url}/infrastructure`} component={Infrastructure}/>
                    <Route path={`${match.url}/myfaction`} component={Myfaction}/>
                    <Route path={`${match.url}/mybusiness`} component={Mybusiness}/>
                    <Route path={`${match.url}/myownership`} component={Myownership}/>
                    <Route path={`${match.url}/factions`} component={Factions}/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Tables;