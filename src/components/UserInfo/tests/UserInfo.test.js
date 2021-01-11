import '../../../test-utilities/matchMedia.mock';
import '@shopify/react-testing/matchers';
import React from 'react';
import UserInfo from '../UserInfo';
import { mount } from '@shopify/react-testing';

describe('<Post />', () => {
  it('passes user props to component', () => {
    const user = {
      name: 'Richard',
      followers: 23,
      following: 15,
      microposts: [1, 2],
      email: 'example@railstutorial.org',
    };

    const wrapper = mount(<UserInfo user={user} />);
    const userProps = wrapper.props.user;

    expect(userProps.name).toBe('Richard');
    expect(userProps.followers).toBe(23);
    expect(userProps.following).toBe(15);
    expect(userProps.microposts).toStrictEqual([1, 2]);
    expect(userProps.email).toBe('example@railstutorial.org');
  });

  it('renders user information correctly', () => {
    const user = {
      name: 'Richard',
      followers: 23,
      following: 15,
      microposts: [1, 2],
      email: 'example@railstutorial.org',
    };

    const wrapper = mount(<UserInfo user={user} />);
    expect(wrapper).toContainReactHtml('<h2>Richard</h2>');
    expect(wrapper).toContainReactHtml('<span>2 microposts</span>');
    expect(wrapper).toContainReactText('15following');
    expect(wrapper).toContainReactText('23followers');
  });
});
