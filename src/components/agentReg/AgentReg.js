import React from 'react';
import TextInput from '../common/TextInput';
import './agentReg.css';
import {connect} from 'react-redux';
import {addAgent} from '../../actions/addAgent';
import {bindActionCreators} from 'redux';
import history from '../../history';
 
  class AgentReg extends React.Component {
      constructor(props){
          super(props);
          this.state = {
              agent:{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                agency: '',
                salary: '',
                web: ''
              }
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

  
      handleChange(e) {
          const {name, value} = e.target;
          const {agent} = this.state;
          this.setState({
              agent:{
                  ...agent,
                  [name]: value
              }

          });
      }
  
      handleSubmit(e){
          e.preventDefault();
          console.log("entered");
          const {agent} = this.state;
          const {dispatch} = this.props;
          dispatch(addAgent(agent));
          history.push('/ownerList');
      }
      
      render() {
          const {firstName, lastName, email, phone, agency, salary, web} = this.state;
          return (
          <div className = "input">
              <form>
                  <h1>Agent Registration</h1>
                  <TextInput
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={this.handleChange}
                  /> 
  
                  <TextInput
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={this.handleChange}
                  />
                  
                  <TextInput
                  name="email"
                  label="Email Address"
                  value={email}
                  onChange={this.handleChange}
                  />
  
                  <TextInput
                  name="phone"
                  label="Work Phone"
                  value={phone}
                  onChange={this.handleChange}
                  />
  
                  <TextInput
                  name="agency"
                  label="Agency (If Applicable)"
                  value={agency}
                  onChange={this.handleChange}
                  />
  
                  <TextInput
                  name="salary"
                  label="Desired Range of Compensation"
                  value={salary}
                  onChange={this.handleChange}
                  />
  
                  <TextInput
                  name="web"
                  label="Personal Website/Portfolio (Optional)"
                  value={web}
                  onChange={this.handleChange}
                  />
                </form>

                <button onClick={this.handleSubmit}>Connect</button>
          </div>
      );
    }
  }
  function matchDispatchToProps(dispatch){
    return bindActionCreators({addAgent: addAgent}, dispatch);
  }
  
  export default connect(matchDispatchToProps)(AgentReg);
  