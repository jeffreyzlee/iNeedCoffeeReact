import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './landing.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../common/Header';
import history from '../../history';

class LandingPage extends React.Component {

  move(){
    history.push('/ownerRegistration');
  }
  move2(){
    history.push('/agentRegistration');
  }
  render() {
    return (
      <div className="landing">
        <div>
          <button className="button" onClick = {this.move}>Owners Registration</button>
        </div>
        <div>
            <button className="button2" onClick={this.move2}>Agents Registration</button>
        </div>
      </div>
    );
  }
}


export default LandingPage;
