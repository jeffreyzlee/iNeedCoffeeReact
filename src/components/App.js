// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect, Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './landing/LandingPage';
import AgentReg from './agentReg/AgentReg';
import Connect from './connect/Connect';
import OwnerReg from './ownerReg/OwnerReg';
import OwnerInfo from '../containers/ownerInfo';

import history from 'history';
import { Router, browserHistory } from 'react-router';

import OwnerList from '../containers/owners';

import {createStore} from 'redux';
import allReducers from '../reducers';

const store = createStore(allReducers); //create main application STORE in redux


class App extends React.Component{
  render(){
    return(
      <div>
        <LandingPage/>
      </div>
    );
  }
}

export default App;