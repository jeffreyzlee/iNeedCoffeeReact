import {combineReducers} from 'redux';

import ownerReducer from './ownerReducer';
import agentReducer from './agentReducer';

import activeOwnerReducer from './activeOwnerReducer';
import React from 'react';

const allReducers = combineReducers({
  owners: ownerReducer,
  agents: agentReducer,
  activeOwner: activeOwnerReducer
});

export default allReducers;
