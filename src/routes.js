import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LandingPage from './components/landing/LandingPage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

import AgentReg from './components/agentReg/AgentReg';
import Connect from './components/connect/Connect';
import OwnerList from './components/ownerList/OwnerList';
import OwnerReg from './components/ownerReg/OwnerReg';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />

    <Route path="agentRegistration" component={AgentReg} />
    <Route path="connect" component={Connect} />
    <Route path="ownerList" component={OwnerList} />
    <Route path="ownerRegistration" component={OwnerReg} />
  </Route>
);
