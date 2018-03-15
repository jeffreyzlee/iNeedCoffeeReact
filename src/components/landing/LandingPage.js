import React from 'react';
import {Link, browserHistory} from 'react-router-dom';
import './landing.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../common/Header';

class LandingPage extends React.Component {


  render() {
    return (
      <div className="landing">
        <div>
          <button className="button"><Link to="/ownerRegistration">Owners Registration</Link></button>
        </div>
        <div>
            <button className="button2"><Link to="/agentRegistration">Agents Registration</Link></button>
        </div>
      </div>
    );
  }
}


export default LandingPage;
