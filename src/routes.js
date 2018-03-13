import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LandingPage from './components/landing/LandingPage';

import AgentReg from './components/agentReg/AgentReg';
import Connect from './components/connect/Connect';
import OwnerReg from './components/ownerReg/OwnerReg';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="agentRegistration" component={AgentReg} />
    <Route path="connect" component={Connect} />
    <Route path="ownerRegistration" component={OwnerReg} />
  </Route>
);
