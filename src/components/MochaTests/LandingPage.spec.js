import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import LandingPage from '../landing/LandingPage';
const wrapper = mount(<LandingPage/>);

describe('LandingPage Component', () => {
  
  it('renders Landing Page', () => {
    expect(wrapper.find('h3').text()).toEqual(' HomePage ');
  });
});