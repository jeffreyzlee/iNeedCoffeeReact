import React from 'react';
import {Link} from 'react-router';
import TextInput from '../common/TextInput';

class AgentReg extends React.Component {
  render() {
    return (
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
            />
        </form>
    );
  }
}

export default AgentReg;
