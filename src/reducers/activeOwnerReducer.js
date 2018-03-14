export default function ( state = null, action ){
    switch(action.type){
        case "OWNER_SELECTED":
            console.log("active");
            return action.payload;
        default:
            console.log("No active");
            break;
    
    }
    return state;
}