
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import {AgentReg} from '../agentReg/AgentReg';
const wrapper = mount(<AgentReg/>);

describe('AgentReg Component', () => {

  it('renders Agent Registration Page', () => {
    expect(wrapper.find('h1').text()).toEqual('Agent Registration');
  });

});
