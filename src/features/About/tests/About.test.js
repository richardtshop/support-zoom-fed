import React from 'react';
import '@shopify/react-testing/matchers';
import About from '../About';
import { mount } from '@shopify/react-testing';

describe('<About />', () => {
  it('has an h2 element with text react html content', () => {
    const wrapper = mount(<About />);
    expect(wrapper).toContainReactHtml('<h2>About</h2>');
  });

  it('has an h2 element with text content', () => {
    const wrapper = mount(<About />);
    expect(wrapper.find('h2').text()).toBe('About');
  });
});
