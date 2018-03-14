// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './landing/LandingPage';
import AgentReg from './agentReg/AgentReg';
import Connect from './connect/Connect';
import OwnerReg from './ownerReg/OwnerReg';
import OwnerInfo from '../containers/ownerInfo';


import { Router, browserHistory } from 'react-router';

import OwnerList from '../containers/owners';

const App = () => (
  <div>
    <Header/>
    <LandingPage/>
    <h2> List Of Owners </h2>
    <OwnerList/>
    <hr/>
    <OwnerInfo/>
    <OwnerReg/>
  </div>

);

export default App;