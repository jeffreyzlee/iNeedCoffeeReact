import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import './landing.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <OwnerButton/>
        <AgentButton/>
      </div>
    );
  }
}

class OwnerButton extends React.Component { 
  ownerReg(){
    browserHistory.push('ownerRegistration');
  }
  render(){
    return (
      <div>
        <button onClick={this.ownerReg} className="button">Owners Registration</button>
      </div>
    );
  }
}

class AgentButton extends React.Component { 
  agentReg(){
    browserHistory.push('agentRegistration');
  }
  render(){
    return (
      <div>
          <button onClick={this.agentReg} className="button">Agents Registration</button>
      </div>
    );
  }
}
export default LandingPage;
