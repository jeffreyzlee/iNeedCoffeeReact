import React from 'react';
import {Link} from 'react-router';
import './ownerReg.css';
import TextInput from '../common/TextInput';
class OwnerReg extends React.Component {
  render() {
    return (
        <div className = "outer">
          <div className = "ownerInfo">
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
            name="work"
            label="Most Recent Employer"
            />

            <TextInput
            name="company"
            label="Coffee Shop Name"
            />

            <input
            type="submit"
            className="btn btn-primary"
            />
        </form>
          </div>
          <div className = "ownerPreference">
            Hi
          </div>
        </div>
    );
  }
}

export default OwnerReg;
