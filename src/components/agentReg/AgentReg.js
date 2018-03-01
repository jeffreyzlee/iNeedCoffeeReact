import React from 'react';
import {Link} from 'react-router';
import TextInput from '../common/TextInput';
import './agentReg.css';
import { browserHistory } from 'react-router';


class AgentReg extends React.Component {
  connectPage(){
    browserHistory.push('connect');
  }
  render() {
    return (
        <div className = "agentReg">
          <div className = "innerForm">
          <form>
              <h1>Agent Registration</h1>
              
              <TextInput
              name="firstName"
              label="First Name"
              />

              <TextInput
              name="lastName"
              label="Last Name"
              />
              
              <TextInput
              name="email"
              label="Email Address"
              />

              <TextInput
              name="phone"
              label="Work Phone"
              />

              <TextInput
              name="agency"
              label="Agency (If Applicable)"
              />

              <TextInput
              name="salary"
              label="Desired Range of Compensation"
              />

              <TextInput
              name="web"
              label="Personal Website/Portfolio (Optional)"
              />

              <input
              type="submit"
              className="btn btn-primary"
              onClick = {this.connectPage}
              />
          </form>
          </div>
        </div>
    );
  }
}

export default AgentReg;
