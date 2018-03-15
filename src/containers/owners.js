import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectOwner} from '../actions/selectOwner';
import ownerInfo from './ownerInfo';

//dumb component that doesn't know anything about main data...works with container
class OwnerList extends Component{
    createListItems(){
        return this.props.owners.map((owner)=> {
            return (
                <li key = {owner.email} onClick={() => this.props.selectOwner(owner)}>
                    {owner.firstName} 
                </li>
            );
        }); //map loops through props.users, which refers to ALL owner reducers
    }

    render(){
       return(
            <div>
                <div>
                    <ul>
                        {this.createListItems()}
                    </ul>
                </div>
            </div>
       ); 
    }
}

//function that takes piece of application storage state and passes into component as a property
function mapStateToProps(state){
    return {
        owners: state.owners
    };
}

//pass in actions as prop
function matchDispatchToProps(dispatch){
    //create an object of actions each wrapped with the dispatch
    return bindActionCreators({selectOwner: selectOwner}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OwnerList);