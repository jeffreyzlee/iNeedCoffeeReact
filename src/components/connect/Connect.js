import React from 'react';
import {Link} from 'react-router';
import './connect.css';
import {connect} from 'react-redux';

class Connect extends React.Component {
  addChatMessage(){
    const chat = document.getElementById('Message'); // finds the container
    const parent = document.getElementById('chatMsg');
    if(chat.value != ""){
      const newDiv = document.createElement('div');
        newDiv.id = "newMsg";
        newDiv.className = "container";
        newDiv.innerHTML = chat.value;

      parent.appendChild(newDiv);
      chat.value = "";
    }
  }

  checkNull(){
    if(this.props.agents){
      return(<h2> Select an owner! </h2>);
  }
  }
  render() {
    return (     
        <div>
          <div className = "outerLeft">
            <h4 style={{marginLeft:'300px'}}> Messenger Service </h4>
            <div className = "chatMsg" id = "chatMsg">
            
            </div>

            <div className = "sendText">
                <form>
                  <textarea id="Message" placeholder="Write Something..." className = "msg">
                  </textarea>
                  
                  <button style={{marginTop:'20px'}}type="button" onClick = {this.addChatMessage}>Send Message</button>
                </form>
            </div>
          </div>
          <div className = "outerRight">
            <div className = "agentCard">
              
              <h4 className = "agents"> AGENT INFO </h4>
              <p>Name: {this.props.agents.firstName} {this.props.agents.lastName}</p>
              <p>Email: {this.props.agents.email}</p>
              <p>Phone: {this.props.agents.phone}</p>
              <p>Agency: {this.props.agents.agency}</p>
              <p>Desired Range of Compensation: {this.props.agents.salary}</p>
              <p>Personal Website/Portfolio: {this.props.agents.web}</p>
            </div>
            <div className = "ownerCard">
              <h4 className = "owners"> PROSPECTIVE OWNER INFO </h4>
              <p> Name: {this.props.owners.firstName} {this.props.owners.lastName} </p>
              <p> Email: {this.props.owners.email} </p>
              <p> Phone Number: {this.props.owners.phone} </p>
              <p> Coffee Store Name: {this.props.owners.company} </p>
              <p> Most Recent Employer: {this.props.owners.work} </p>
              <p> Preferred Locations : {this.props.owners.l1}, {this.props.owners.l2}, {this.props.owners.l3}</p>
              <p> Preferred Rent: | Max Rent: {this.props.owners.r1} | {this.props.owners.r2} </p>
              <p> Population Preference : {this.props.owners.p1}</p>
              <p> Proximity to University : {this.props.owners.u1}</p>
              <p> Other Notes: {this.props.owners.n1}</p>
            </div>
          </div>
        </div>


    );
  }
}

//takes application storage state and passes it as a component.
//We are ACCESSING memory in this file only
function mapStateToProps(state){
  return {
      owners: state.activeOwner,
      agents: state.agents
  };
}
export default connect(mapStateToProps)(Connect);
