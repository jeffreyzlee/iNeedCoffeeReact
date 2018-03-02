import React from 'react';
import {Link} from 'react-router';
import './connect.css';


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

  getAgentInfo(field){
    const agent = localStorage.getItem('agentState');
    let agentInfo = JSON.parse(agent);
    return agentInfo[field];
  }

  getOwnerInfo(field){
    const owner = localStorage.getItem('ownerState');
    let ownerInfo = JSON.parse(owner);
    return ownerInfo[field];
  }

  render() {
    return (     
        <div>
          <div className = "outerLeft">
          <h4 style={{marginLeft:'300px'}}> Messenger</h4>
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
              <h4> AGENT </h4>
              <p>Name: {this.getAgentInfo("firstName")} {this.getAgentInfo("lastName")}</p>
              <p>Email: {this.getAgentInfo("email")}</p>
              <p>Phone: {this.getAgentInfo("phone")}</p>
              <p>Agency: {this.getAgentInfo("agency")}</p>
              <p>Desired Range of Compensation: {this.getAgentInfo("salary")}</p>
              <p>Personal Website/Portfolio: {this.getAgentInfo("web")}</p>
            </div>
            <div className = "ownerCard">
              <h4> OWNER </h4>
              <p>Name: {this.getOwnerInfo("firstName")} {this.getOwnerInfo("lastName")}</p>
              <p>Email: {this.getOwnerInfo("email")}</p>
              <p>Work Phone: {this.getOwnerInfo("phone")}</p>
              <p>Most Recent Employer: {this.getOwnerInfo("work")}</p>
              <p>Coffee Shop Name: {this.getOwnerInfo("company")}</p>
              <p>Location 1: {this.getOwnerInfo("l1")}</p>
              <p>Location 2: {this.getOwnerInfo("l2")}</p>
              <p>Location 3: {this.getOwnerInfo("l3")}</p>
              <p>Preferred Rent: {this.getOwnerInfo("r1")}</p>
              <p>Max Affordable Rent: {this.getOwnerInfo("r2")}</p>
              <p>Population Density: {this.getOwnerInfo("p1")}</p>
              <p>Preferred Proximity: {this.getOwnerInfo("u1")}</p>
              <p>Other Notes: {this.getOwnerInfo("n1")}</p>
            </div>
          </div>
        </div>


    );
  }
}
export default Connect;
