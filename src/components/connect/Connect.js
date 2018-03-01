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
              <p>Name:</p>
              <p>Phone:</p>
            </div>
            <div className = "ownerCard">
              <h4> OWNER </h4>
              <p>Name:</p>
              <p>Phone:</p>
            </div>
          </div>
        </div>


    );
  }
}
export default Connect;
