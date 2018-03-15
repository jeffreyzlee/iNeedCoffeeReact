import Owners from './owners';
import OwnerInfo from './ownerInfo';
import React, {Component} from 'react';

class OwnerDisplay extends React.Component{
    render(){
        return(
            <div>
                <h2> List of Owners </h2>
                <div><Owners/></div>
                <hr/>
                <div><OwnerInfo/></div>
            </div>
        );
    }
}

export default OwnerDisplay;