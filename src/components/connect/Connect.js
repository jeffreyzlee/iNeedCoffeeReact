import React from 'react';
import {Link} from 'react-router-dom';
import './connect.css';
import {connect} from 'react-redux';
import $ from 'jquery';


class Connect extends React.Component {
  handleClick1(){
    const bar = document.getElementById('bar');
    bar.style.width = "20%";
  }
  handleClick2(){
    const bar = document.getElementById('bar');
    bar.style.width = "40%";
  }
  handleClick3(){
    const bar = document.getElementById('bar');
    bar.style.width = "60%";
  }
  handleClick4(){
    const bar = document.getElementById('bar');
    bar.style.width = "80%";
  }
  handleClick5(){
    const bar = document.getElementById('bar');
    bar.style.width = "100%";
  }
  addChatMessage(){
    const chat = document.getElementById('Message'); // finds the container
    const parent = document.getElementById('chatMsg');
    if(chat.value != ""){
      const newDiv = document.createElement('div');
      const response = document.createElement('div');
        newDiv.id = "newMsg";
        newDiv.className = "container";
        newDiv.innerHTML = chat.value;
        response.id = "response";
        response.className = "container2";
      parent.appendChild(newDiv);
      if(chat.value.includes("Can you")){
        response.innerHTML = "Sure thing! I'll start looking into it right now.";
        setTimeout(function(){parent.appendChild(response);}, 1000);
      }
      if(chat.value.includes("Hi")){
        response.innerHTML = "What's up?";
        setTimeout(function(){parent.appendChild(response);}, 1000);
      }
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

            <div className = "sendText" style={{marginLeft: '2%'}}>
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
              <h6>Name: {this.props.agents.firstName} {this.props.agents.lastName}</h6>
              <h6>Email: {this.props.agents.email}</h6>
              <h6>Phone: {this.props.agents.phone}</h6>
              <h6>Agency: {this.props.agents.agency}</h6>
              <h6>Desired Range of Compensation: {this.props.agents.salary}</h6>
              <h6>Personal Website/Portfolio: {this.props.agents.web}</h6>
            </div>
            <div className = "ownerCard">
              <h4 className = "owners"> PROSPECTIVE OWNER INFO </h4>
              <h6> Name: {this.props.owners.firstName} {this.props.owners.lastName} </h6>
              <h6> Email: {this.props.owners.email} </h6>
              <h6> Phone Number: {this.props.owners.phone} </h6>
              <h6> Coffee Store Name: {this.props.owners.company} </h6>
              <h6> Most Recent Employer: {this.props.owners.work} </h6>
              <h6> Preferred Locations : {this.props.owners.l1}, {this.props.owners.l2}, {this.props.owners.l3}</h6>
              <h6> Preferred Rent: | Max Rent: {this.props.owners.r1} | {this.props.owners.r2} </h6>
              <h6> Population Preference : {this.props.owners.p1}</h6>
              <h6> Proximity to University : {this.props.owners.u1}</h6>
              <h6> Other Notes: {this.props.owners.n1}</h6>
            </div>
            <div className="container2" id="myWizard" style={{width: '500px', marginRight: '240px', backgroundColor: '#dedede', borderColor: '#dc143c'}}>
              <div className="progress">
                <div className="progress-bar progress-bar-success" id = "bar" role="progressbar" style={{width: '20%'}}>
                </div>
              </div>
              
              <div className="navbar">
                  <div className="navbar-inner">
                        <ul className="nav nav-pills">
                          <li className="active"><a href="#step1" data-toggle="tab" data-step="1" onClick={this.handleClick1}>Connect</a></li>
                          <li><a href="#step2" data-toggle="tab" data-step="2" onClick={this.handleClick2}>Discuss</a></li>
                          <li><a href="#step3" data-toggle="tab" data-step="3" onClick={this.handleClick3}>Research</a></li>
                          <li><a href="#step4" data-toggle="tab" data-step="4" onClick={this.handleClick4}>Contact</a></li>
                          <li><a href="#step5" data-toggle="tab" data-step="5" onClick={this.handleClick5}>Sign</a></li>
                        </ul>
                  </div>
              </div>
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
