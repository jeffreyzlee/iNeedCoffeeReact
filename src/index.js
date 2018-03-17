/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //
import {Router, Route, Link} from 'react-router-dom';
import routes from './routes';

import App from './components/App';
import {createStore} from 'redux';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import allReducers from './reducers';
import Header from './components/common/Header';
import OwnerReg from './components/ownerReg/OwnerReg';
import AgentReg from './components/agentReg/AgentReg';
import OwnerDisplay from './containers/ownerDisplay';
import Connect from './components/connect/Connect';
import history from './history';

//const store = configureStore();
const store = createStore(allReducers); //create main application STORE in redux

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header/>
        <Route exact path="/" component={App}/>
        <Route path="/ownerRegistration" component={OwnerReg}/>
        <Route path="/agentRegistration" component={AgentReg}/>
        <Route path="/ownerList" component={OwnerDisplay}/>
        <Route path="/connect" component={Connect}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
