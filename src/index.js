/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import App from './components/App';
import {createStore} from 'redux';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import allReducers from './reducers';
import Header from './components/common/Header';

//const store = configureStore();
const store = createStore(allReducers); //create main application STORE in redux

ReactDOM.render(
  /*
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,*/
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);
