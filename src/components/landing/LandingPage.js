import React from 'react';
import {Link, browserHistory} from 'react-router';
import './landing.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../common/Header';

class LandingPage extends React.Component {
  agentReg(){
    browserHistory.push('agentRegistration');
  }

  render() {
    return (
      <div className="landing">
        <div>
          <button className="button">Owners Registration</button>
        </div>
        <div>
            <button onClick={this.agentReg} className="button2">Agents Registration</button>
        </div>
      </div>
    );
  }
}


export default LandingPage;
