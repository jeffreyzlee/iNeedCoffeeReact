import React from 'react';
import {Link} from 'react-router';
import TextInput from '../common/TextInput';

class AgentReg extends React.Component {
  render() {
    return (
        <form>
            <h1>Agent Registration</h1>
            <TextInput
            name="fullName"
            label="Full Name"
            />
            
            <TextInput
            name="email"
            label="Email"
            />

            <TextInput
            name="phone"
            label="Work Phone"
            />

            <TextInput
            name="agency"
            label="Agency"
            />

            <TextInput
            name="salary"
            label="Desired Compensation"
            />

            <TextInput
            name="web"
            label="Personal Website"
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
