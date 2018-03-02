import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import './landing.css';

class LandingPage extends React.Component {
  agentReg(){
    browserHistory.push('agentRegistration');
  }
  ownerReg(){
    browserHistory.push('ownerRegistration');
  }
  render() {
    return (
      <div className="landing">
        <div>
          <button onClick={this.ownerReg} className="button">Owners Registration</button>
        </div>
        <div>
            <button onClick={this.agentReg} className="button">Agents Registration</button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
