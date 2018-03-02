import React from 'react';
import {Link, browserHistory} from 'react-router';
import './landing.css';

class LandingPage extends React.Component {
  ownerReg(){
    browserHistory.push('ownerRegistration');
  }
  agentReg(){
    browserHistory.push('agentRegistration');
  }
  render() {
    return (
      <div className="landing">
        <div>
            <button onClick={this.agentReg} className="button2">Agents Registration</button>
        </div>
        <div>
          <button onClick={this.ownerReg} className="button">Owners Registration</button>
        </div>
      </div>
    );
  }
}


export default LandingPage;
