import React, {Component} from 'react';
import {connect} from 'react-redux';
import history from '../history';
class OwnerInfo extends Component { 
    handleSubmit(e){
        e.preventDefault();
        //this.props.selectOwner(owners);
        history.push('/connect');
    }
    render() {
        if(!this.props.owners){
            return(<h2> Select an owner! </h2>);
        }
        return (
            <div className = "panel panel-default">
                <div className="panel-heading">Prospective Owner Information and Preferences</div>
                <div className = "panel-body">
                    <h3> <b>Name:</b> &emsp;{this.props.owners.firstName} {this.props.owners.lastName} </h3>
                    <h4> <b>Email:</b> &emsp;{this.props.owners.email} </h4>
                    <h4> <b>Phone Number:</b> &emsp;{this.props.owners.phone} </h4>
                    <h4> <b>Coffee Store Name:</b> &emsp;{this.props.owners.company} </h4>
                    <h4> <b>Most Recent Employer:</b> &emsp;{this.props.owners.work} </h4>
                    <h4> <b>Preferred Locations:</b> &emsp;{this.props.owners.l1}, {this.props.owners.l2}, {this.props.owners.l3}</h4>
                    <h4> <b>Preferred Rent | Max Rent:</b> &emsp;{this.props.owners.r1} | {this.props.owners.r2} </h4>
                    <h4> <b>Population Preferenc :</b> &emsp;{this.props.owners.p1}</h4>
                    <h4> <b>Proximity to University: &emsp;</b>{this.props.owners.u1}</h4>
                    <h4> <b>Other Notes:</b>&emsp; {this.props.owners.n1}</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Connect With Owner!"/>
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