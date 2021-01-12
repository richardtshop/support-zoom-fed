import '../../../test-utilities/matchMedia.mock';
import React, {useCallback}from 'react';
import PostForm from '../PostForm';
import { MockedProvider } from '@apollo/client/testing';
import { Form } from '@shopify/polaris';

import mountWithAppProvider from '../../../test-utilities/MountWithAppProvider';

describe('<PostForm />', () => {
  it('is called when the child component is clicked', () => {
    const spy = jest.fn();
    const wrapper = mountWithAppProvider(
      <MockedProvider>
        <PostForm onSubmit={spy} />
      </MockedProvider>,
    );
    wrapper.find(Form).trigger('onSubmit');
    expect(spy).toHaveBeenCalled();
  });

  it('renders loading when loading', () => {
    // const wrapper = mountWithAppProvider(
    //     <PostForm />
    // );
    // expect(wrapper.find('h3').text()).toBe('Loading...');
  });
});
