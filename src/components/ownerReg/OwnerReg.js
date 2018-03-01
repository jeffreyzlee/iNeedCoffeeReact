import React from 'react';
import {Link, browserHistory} from 'react-router';
import './ownerReg.css';
import TextInput from '../common/TextInput';
 
class OwnerReg extends React.Component {
  constructor(){
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        work: '',
        company: '',
        l1: '',
        l2: '',
        l3: '',
        r1: '', 
        r2: '',
        p1: '',
        u1: '',
        n1: ''
    };
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
    const state = this.state;
    localStorage.setItem('ownerState', JSON.stringify(this.state));
    this.connectPage();
}

  render() {
    const {firstName, lastName, email, phone, work, company, l1, l2, l3, r1, r2, p1, u1, n1} = this.state;
    return (
        <div className = "outer">
          <div className = "ownerInfo">
            <form onSubmit={this.handleSubmit}>
              <h1>Owner Registration</h1>
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
              name="work"
              label="Most Recent Employer"
              value={work}
              onChange={this.onChange}
              />

              <TextInput
              name="company"
              label="Coffee Shop Name"
              value={company}
              onChange={this.onChange}
              />

              <input
              type="submit"
              className="btn btn-primary"
              />
            </form>
          </div>
          <div className = "ownerPreference">
            <div className="vertical-menu" id="accordion" >
              <div className="panel panel-default" style={{marginBottom:'5%'}}>
                <div className="panel-heading" >
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Location Preference</a>
                  </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h5> Let's Get Started ; Enter your three most preferred locations! </h5>
                    <TextInput name = "l1" label = "Location 1" value={l1} onChange={this.onChange}/>
                    <TextInput name = "l2" label = "Location 2" value={l2} onChange={this.onChange}/>
                    <TextInput name = "l3" label = "Location 3" value={l3} onChange={this.onChange}/>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" style={{marginBottom:'5%'}}>
                <div className="panel-heading" >
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Rent Preference</a>
                  </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h5> Enter your preferred rent range (per month) </h5>
                    <TextInput name = "r1" label = "Preferred Rent" value={r1} onChange={this.onChange}/>
                    <TextInput name = "r2" label = "Max Affordable Rent" value={r2} onChange={this.onChange}/>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" style={{marginBottom:'5%'}}>
                <div className="panel-heading" >
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Regional Population Preference</a>
                  </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h5> Enter your preferred population density within the area (N/A if no preference) </h5>
                    <TextInput name = "p1" label = "Population Density" value={p1} onChange={this.onChange}/>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" style={{marginBottom:'5%'}}>
                <div className="panel-heading" >
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Proximity to University</a>
                  </h4>
                </div>
                <div id="collapse4" className="panel-collapse collapse">
                  <div className="panel-body">
                  <h5> Enter an ideal proximity from university (N/A if no preference) </h5>
                    <TextInput name = "u1" label = "Preferred Proximity to University" value={u1} onChange={this.onChange}/>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" style={{marginBottom:'5%'}}>
                <div className="panel-heading" >
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Other Preferences</a>
                  </h4>
                </div>
                <div id="collapse5" className="panel-collapse collapse">
                  <div className="panel-body">
                  <h5> Enter any other notes or preferences below</h5>
                    <TextInput name = "n1" label = "" value={n1} onChange={this.onChange}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default OwnerReg;
