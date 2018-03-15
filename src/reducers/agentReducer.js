const unconnected = {
    agents: [
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            agency: '',
            salary: '',
            web: ''
        }
    ]
};
const initialState = {
    agents: [
    ]
};


export default function (state = initialState, action){
    console.log("Action.type is", action.type);
    switch (action.type){
        case "AGENT_ADDED":
            console.log("ur here");
            initialState.agents = action.payload;
            return initialState.agents;
        default:
            return initialState.agents;
    }
}