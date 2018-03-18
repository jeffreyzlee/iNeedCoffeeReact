import * as types from './actionTypes';
import AgentApi from '../api/mockAgentApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export const addAgent = (agent) => {
    console.log("You added an agent...", agent.firstName, agent.lastName); //just to verify
        return{ //action
            type: "AGENT_ADDED",
            payload: agent
        };
};