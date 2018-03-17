import Owners from './owners';
import OwnerInfo from './ownerInfo';
import React, {Component} from 'react';
import './ownerDisplay.css';

class OwnerDisplay extends React.Component{
    render(){
        return(
            <div className="owners">
                <h3> List of Owners </h3>
                <div><Owners/></div>
                <hr/>
                <hr/>
                <div><OwnerInfo/></div>
            </div>
        );
    }
}

export default OwnerDisplay;