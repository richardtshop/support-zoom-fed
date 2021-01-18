import '@shopify/react-testing/matchers';
import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {MockedProvider} from '@apollo/client/testing';

import PostFeed from '../PostFeed';
import Post from '../../Post';
import {POSTS_QUERY} from '../graphql';
import mountWithAppContext from '../../../test-utilities/mountWithAppContext';

const mocks = [
  {
    request: {
      query: POSTS_QUERY,
    },
    result: {
      data: {
        microposts: [
          {
            title: 'Title',
            id: '1',
            content: 'Content',
            user: {
              name: 'Richard',
              email: 'example@railstutorial.org',
            },
            createdAt: '2021-01-14T16:55:28Z',
            tag: 'Test',
          },
        ],
      },
    },
  },
];

describe('<PostFeed />', () => {
  it('renders loading when loading', () => {
    const wrapper = mountWithAppContext(
      <MockedProvider>
        <PostFeed />
      </MockedProvider>,
    );
    expect(wrapper.find('h3').text()).toBe('Loading...');
  });

  it('loads a series of posts from graphql endpoint', async () => {
    const wrapper = mountWithAppContext(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PostFeed />
      </MockedProvider>,
    );
    // This act stuff prevents an error in the test console
    await act(async () => {
      // this wait function executes the loaded state. without this whole block you can test loading state
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactComponent(Post);
  });
});
