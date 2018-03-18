import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import allReducers from '../../reducers/index';
import {createStore} from 'redux';
import agentReducer from '../../reducers/agentReducer';
import ownerReducer from '../../reducers/ownerReducer';
import activeOwnerReducer from '../../reducers/activeOwnerReducer';

const wrapper = mount(<allReducers/>);

describe('All Reducers', () => {
  
  it('creates all reducers correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Finds owners reducer', () => {
    expect(wrapper.find(ownerReducer));
    expect(wrapper.find(ownerReducer).length).toEqual(0);
  });

  it('Correctly renders default Owner List from Ownder reducer', () => {
    const action = allReducers;
    const owners = ownerReducer(null, action);
    expect(owners.length).toEqual(3);
  });


  it('Finds agents reducer', () => {
    expect(wrapper.find(agentReducer));
    expect(wrapper.find(ownerReducer).length).toEqual(0);
  });

  it('Finds Active Owners Reducer', () => {
    expect(wrapper.find(activeOwnerReducer));
    expect(wrapper.find(ownerReducer).length).toEqual(0);
  });
});

