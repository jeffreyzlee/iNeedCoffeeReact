import React, {Component} from 'react';

import {connect} from 'react-redux';

class OwnerInfo extends Component { 
    render() {
        if(!this.props.owners){
            return(<h2> Select an owner! </h2>);
        }
        return (
            <div>
                <h2> Name: {this.props.owners.firstName} {this.props.owners.lastName} </h2>
                <h3> Email: {this.props.owners.email} </h3>
                <h3> Coffee Store name: {this.props.owners.company} </h3>
                <h3> Preferred Locations : {this.props.owners.l1}, {this.props.owners.l2}, {this.props.owners.l3}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        owners: state.activeOwner
    };
}

export default connect(mapStateToProps)(OwnerInfo);