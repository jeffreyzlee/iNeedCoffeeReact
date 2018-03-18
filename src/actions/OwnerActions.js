//action creator
import OwnerApi from '../api/mockOwnerApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadOwnerSuccess(owners){
    return {type: "LOAD_OWNERS_SUCCESS", owners};
}

export function addOwner(owner){
    console.log("You added an owner...", owner.firstName, owner.lastName); //just to verify
        return{ //action
            type: "OWNER_ADDED",
            payload: owner
        };
}

export function selectOwner(owner){
    console.log("You've selected a new owner...", owner.firstName); //just to verify
        return{ //action
            type: "OWNER_SELECTED",
            payload: owner
        };
}

export function loadOwners(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return OwnerApi.getAllOwners().then(owners => {
            dispatch(loadOwnerSuccess(owners));
        }).catch(error => {
            throw(error);
        });
    };
}