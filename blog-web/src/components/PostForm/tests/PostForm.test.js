import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import {Form, TextField} from '@shopify/polaris';
import '@shopify/react-testing/matchers';
import {act} from 'react-dom/test-utils';
import wait from 'waait';

import PostForm from '../PostForm';
import {ADD_POST_MUTATION} from '../graphql';
import mountWithAppContext from '../../../test-utilities/mountWithAppContext';

const mocks = [
  {
    request: {
      query: ADD_POST_MUTATION,
      variables: {
        content: 'Content',
        tag: 'Tag',
        userId: '1',
      },
    },
    result: {
      data: {
        createMicropost: {
          micropost: {
            id: '1',
            content: 'Content',
            tag: 'Hi',
          },
        },
      },
    },
  },
];

describe('<PostForm />', () => {
  it('shows loading and error state when submitted with no data', async () => {
    const wrapper = mountWithAppContext(
      <MockedProvider>
        <PostForm />
      </MockedProvider>,
    );

    await act(async () => {
      wrapper.find(Form).trigger('onSubmit');
      await wrapper.update();
      expect(wrapper).toContainReactText('Loading...');
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactText('Error :( Please try again');
  });

  it('submits a post mutation', async () => {
    const wrapper = mountWithAppContext(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PostForm />
      </MockedProvider>,
    );

    wrapper.find(TextField, {label: 'Post'}).trigger('onChange', 'Content');
    wrapper.find(TextField, {label: 'Tag'}).trigger('onChange', 'Tag');

    wrapper.find(Form).trigger('onSubmit');
    await wrapper.act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactText('Success');
  });
});
