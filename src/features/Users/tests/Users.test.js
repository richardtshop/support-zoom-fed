import React from 'react';
import Users from '../Users';

import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<Users />', () => {
  it('has an h2 element with text react html content', () => {
    const wrapper = mount(<Users/>);
    expect(wrapper).toContainReactHtml('<h2>Users</h2>');
  });
});

