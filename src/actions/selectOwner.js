//action creator
//parameter is the owner...
export const selectOwner = (owner) => {
    console.log("You've selected a new owner...", owner.firstName); //just to verify
    return{ //action
        type: "OWNER_SELECTED",
        payload: owner
    };

};