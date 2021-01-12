import React from 'react';
import Home from '../Home';

import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<Home />', () => {
  it('has an h2 element with text react html content', () => {
    const wrapper = mount(<Home/>);
    expect(wrapper).toContainReactHtml('<h2>Home</h2>');
  });
});

