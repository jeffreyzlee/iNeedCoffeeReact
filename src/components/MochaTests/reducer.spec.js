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

  it('Finds owners', () => {
    expect(wrapper.find(ownerReducer));
  });

  it('Finds agents', () => {
    expect(wrapper.find(agentReducer));
  });

  it('Finds Active Owners', () => {
    expect(wrapper.find(activeOwnerReducer));
  });
});
