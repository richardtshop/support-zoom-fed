import React from 'react';
import App from './App';
import { mount } from '@shopify/react-testing';

describe('renders learn react link', () => {
  it('sets a skeleton prop to true on the component when presents', () => {
    const wrapper = mount(<App />);
    expect(wrapper.prop('skeleton')).toBe(true);
  });
});
