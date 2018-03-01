import React from 'react';
import {Link} from 'react-router';
import './ownerReg.css';
import TextInput from '../common/TextInput';
import { browserHistory } from 'react-router';
 
class OwnerReg extends React.Component {
  connectPage(){
    browserHistory.push('connect');
  }

  render() {
    return (
        <div className = "outer">
          <div className = "ownerInfo">
            <form>
              <h1>Owner Registration</h1>
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
              onClick={this.connectPage}
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
                    <TextInput name = "l1" label = "Location 1"/>
                    <TextInput name = "l2" label = "Location 2"/>
                    <TextInput name = "l3" label = "Location 3"/>
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
                    <TextInput name = "r1" label = "Preferred Rent"/>
                    <TextInput name = "r2" label = "Max Affordable Rent"/>
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
                    <TextInput name = "p1" label = "Population Density"/>
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
                    <TextInput name = "u1" label = "Preferred Proximity to University"/>
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
                    <TextInput name = "r1" label = ""/>
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
