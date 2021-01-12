// import '../../../test-utilities/matchMedia.mock';
import React from 'react';
import PostForm from '../PostForm';
import { MockedProvider } from '@apollo/client/testing';
import { Form } from '@shopify/polaris';
import '@shopify/react-testing/matchers';
// import { act } from 'react-dom/test-utils';
import wait from 'waait';

import mountWithAppProvider from '../../../test-utilities/MountWithAppProvider';

describe('<PostForm />', () => {
  it('shows loading and error state when submitted', async () => {
    const wrapper = mountWithAppProvider(
      <MockedProvider>
        <PostForm />
      </MockedProvider>,
    );
    wrapper.find(Form).trigger('onSubmit');
    expect(wrapper).toContainReactText('Loading...');

    await wrapper.act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactText('Error :( Please try again');
  });
});
