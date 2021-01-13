import React from 'react';
import Nav from '../Nav';
import { BrowserRouter, Link } from 'react-router-dom';

import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<Nav />', () => {
  it('has a <Link> element with text', () => {
    const wrapper = mount(<BrowserRouter><Nav /></BrowserRouter>);
    expect(wrapper.find(Link).text()).toBe('Curds and Whey 🧀');
  });
});
