
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import LandingPage from '../landing/LandingPage';
const wrapper = mount(<LandingPage/>);

describe('LandingPage Component', () => {

  it('renders ownerButton', () => {
    expect(wrapper.find('.button').text()).toEqual('Owners Registration');
  });
  it('renders agentButton', () => {
    expect(wrapper.find('.button2').text()).toEqual('Agents Registration');
  });
});

