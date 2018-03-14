//action creator
export const addOwner = (owner) => {
    console.log("You added an owner...", owner.firstName, owner.lastName); //just to verify
    return{ //action
        type: "OWNER_ADDED",
        payload: owner
    };

};