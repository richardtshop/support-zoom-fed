import React from 'react';
import User from '../User';
import { BrowserRouter } from 'react-router-dom';
import { mount } from '@shopify/react-testing';

import '@shopify/react-testing/matchers';

describe('<User />', () => {
  it('has an h2 element with text content', () => {
    const wrapper = mount(<BrowserRouter><User /></BrowserRouter>);
    expect(wrapper.find('h2').text()).toBe('User');
  });
});
