import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import css from './landing.module.css';
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
        <h3 style={{paddingLeft: '110px'}}> HomePage </h3>
        <div>
          <button className={css.button} onClick = {this.move} >Owners Registration</button>
        </div>
        <div>
            <button className={css.button2} onClick={this.move2}>Agents Registration</button>
        </div>
      </div>
    );
  }
}


export default LandingPage;
