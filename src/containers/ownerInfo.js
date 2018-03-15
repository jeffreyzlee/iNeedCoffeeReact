import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectOwner} from '../actions/selectOwner';

class OwnerInfo extends Component { 
    handleSubmit(e){
        e.preventDefault();
        //this.props.selectOwner(owners);
    }
    render() {
        if(!this.props.owners){
            return(<h2> Select an owner! </h2>);
        }
        return (
            <div>
                <h3> Name: {this.props.owners.firstName} {this.props.owners.lastName} </h3>
                <h4> Email: {this.props.owners.email} </h4>
                <h4> Phone Number: {this.props.owners.phone} </h4>
                <h4> Coffee Store Name: {this.props.owners.company} </h4>
                <h4> Most Recent Employer: {this.props.owners.work} </h4>
                <h4> Preferred Locations : {this.props.owners.l1}, {this.props.owners.l2}, {this.props.owners.l3}</h4>
                <h4> Preferred Rent | Max Rent: {this.props.owners.r1} | {this.props.owners.r2} </h4>
                <h4> Population Preference : {this.props.owners.p1}</h4>
                <h4> Proximity to University : {this.props.owners.u1}</h4>
                <h4> Other Notes: {this.props.owners.n1}</h4>
            
                <form onSubmit={this.handleSubmit}>
                    <Link to ="/connect">
                        <input type="submit" value="Connect With Owner!"/>
                    </Link> 
                </form>
            </div>
        );
    }
}

//takes application storage state and passes it as a component.
//We are ACCESSING memory in this file only
function mapStateToProps(state){
    return {
        owners: state.activeOwner
    };
}

export default connect(mapStateToProps)(OwnerInfo);