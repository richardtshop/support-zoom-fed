import React from 'react';
import {PolarisTestProvider} from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import {createMount} from '@shopify/react-testing';

const mountWithAppContext = createMount({
  context(options) {
    return options;
  },
  render(element, context) {
    return (
      <PolarisTestProvider i18n={en} {...context}>
        {element}
      </PolarisTestProvider>
    );
  },
});

export default mountWithAppContext;
