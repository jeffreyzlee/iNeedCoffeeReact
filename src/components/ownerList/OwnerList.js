import React from 'react';
import {Link, browserHistory} from 'react-router';
//import { browserHistory } from 'react-router';

class OwnerList extends React.Component {
  connectPage(){
    browserHistory.push('connect');
  }
  render() {
    return (
        <div className = "card" id = "userInfo" style = "margin-top: 5%;">
          <div className = "container" style = "margin: 10px 10px 2px 2px;">
            <p id = "userName"></p>
            <p id = "userEmail"></p>
            <p id = "userPhone"></p>
            <p id = "l1"></p>
            <p id = "l2"></p>
            <p id = "l3"></p>
            <p id = "rent"></p>
            <p id = "pop"></p>
            <p id = "prx"></p>
            <p id = "othr"></p>
            
          </div>
          <form onClick={this.connectPage}>
            <button type = "submit" id = "submit" style = "margin: 5% 45% 5% 40%;"> Connect! </button>
          </form>
        </div>
    );
  }
}

export default OwnerList;
