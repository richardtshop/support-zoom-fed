// import '../../../test-utilities/matchMedia.mock';
import React from 'react';
import Post from '../Post';
import { Card } from '@shopify/polaris';
import mountWithAppProvider from '../../../test-utilities/MountWithAppProvider';

describe('<Post />', () => {
  it('renders post content correctly', () => {
    const post = {
      title: 'New post',
      user: {
        name: 'Test User',
        email: 'Doe',
      },
      tag: 'tag',
      content: 'Post content',
      createdAt: '2020-12-18T19:46:21Z',
    };

    const wrapper = mountWithAppProvider(<Post post={post} />);
    expect(wrapper.find(Card).text()).toBe('Test UserPost content#tagPosted: 2020-12-18 - 19:46');
  });

  it('does not render tag if no tag present', () => {
    const post = {
      title: 'New post',
      user: {
        name: 'Test User',
        email: 'Doe',
      },
      tag: '',
      content: 'Post content',
      createdAt: '2020-12-18T19:46:21Z',
    };

    const wrapper = mountWithAppProvider(<Post post={post} />);
    expect(wrapper.find(Card).text()).toBe('Test UserPost contentPosted: 2020-12-18 - 19:46');
  });
});

// Tag doesn't render/ does rendeer
// Props are rendered
