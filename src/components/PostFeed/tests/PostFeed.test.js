import '../../../test-utilities/matchMedia.mock';
import React from 'react';
import PostFeed from '../PostFeed';
import { MockedProvider } from '@apollo/client/testing';

import mountWithAppProvider from '../../../test-utilities/MountWithAppProvider';

describe('<PostFeed />', () => {
  it('renders loading when loading', () => {
    const wrapper = mountWithAppProvider(
      <MockedProvider>
        <PostFeed />
      </MockedProvider>,
    );
    expect(wrapper.find('h3').text()).toBe('Loading...');
  });
});
