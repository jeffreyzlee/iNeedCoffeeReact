import React from 'react';
import {Link} from 'react-router';
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
  render(){
    return (
      <div>
        <button className="button">Owners Registration</button>
      </div>
    );
  }
}

class AgentButton extends React.Component { 
  render(){
    return (
      <div>
          <button className="button">Agents Registration</button>
      </div>
    );
  }
}
export default LandingPage;
