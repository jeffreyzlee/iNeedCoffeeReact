import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import ownerReducer from './ownerReducer';
import agentReducer from './agentReducer'

const allReducers = combineReducers({
  owners: ownerReducer,
  agents: agentReducer
});

export default allReducers;
