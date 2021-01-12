import React from 'react';
import Footer from '../Footer';

import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<Footer />', () => {
  it('has an small element with copyright text and date', () => {
    const wrapper = mount(<Footer />);
    const text = `Curds and Whey blog. ©${new Date(Date.now()).getFullYear()}`;
    expect(wrapper.find('small').text()).toBe(text);
  });
});
