// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './landing/LandingPage';

import { Router, browserHistory } from 'react-router';
import routes from '../routes';

/*
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
*/

const App = () => (
  <div>
    
    <Header/>,
    <LandingPage/>,
    
  </div>

);

export default App;