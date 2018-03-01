import React from 'react';
import {Link, browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import './agentReg.css';
 
  class AgentReg extends React.Component {
      constructor(){
          super();
          this.state = {
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              agency: '',
              salary: '',
              web: ''
          };
          this.connectPage = this.connectPage.bind(this);
          this.onChange = this.onChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

      connectPage(){
        browserHistory.push('connect');
      }
  
      onChange(e) {
          e.preventDefault();
          const state = this.state;
          state[e.target.name] = e.target.value;
          this.setState(state);
      }
  
      handleSubmit(e){
          e.preventDefault();
          console.log("entered");
          const state = this.state;
          localStorage.setItem('agentState', JSON.stringify(this.state));
          this.connectPage();
      }
      
      render() {
          const {firstName, lastName, email, phone, agency, salary, web} = this.state;
          return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <h1>Agent Registration</h1>
                  <TextInput
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={this.onChange}
                  /> 
  
                  <TextInput
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={this.onChange}
                  />
                  
                  <TextInput
                  name="email"
                  label="Email Address"
                  value={email}
                  onChange={this.onChange}
                  />
  
                  <TextInput
                  name="phone"
                  label="Work Phone"
                  value={phone}
                  onChange={this.onChange}
                  />
  
                  <TextInput
                  name="agency"
                  label="Agency (If Applicable)"
                  value={agency}
                  onChange={this.onChange}
                  />
  
                  <TextInput
                  name="salary"
                  label="Desired Range of Compensation"
                  value={salary}
                  onChange={this.onChange}
                  />
  
                  <TextInput
                  name="web"
                  label="Personal Website/Portfolio (Optional)"
                  value={web}
                  onChange={this.onChange}
                  />
  
                  <input
                  type="submit"
                  className="btn btn-primary"
                  />
              </form>
          </div>
      );
    }
  }
  
  export default AgentReg;
  