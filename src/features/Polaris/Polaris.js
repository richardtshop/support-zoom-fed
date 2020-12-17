import React from 'react';
import { Layout, Page, Card } from '@shopify/polaris';
import { Post } from '../../components';

function Polaris() {
  const fakePost = {
    user: 'User',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at mollis orci, et fringilla est. Mauris a nuncnec tortor dapibus dictum. Suspendisse laoreet, lorem a laoreet consequat, turpis augue volutpat neque, atmollis dui dolor at leo. Curabitur aliquet mollis metus nec mollis. Nam lobortis ultricies arcu, eget egestasturpis consequat ac',
    tag: 'tag',
  };

  return (
    <Page fullWidth title="Polaris">
      <Layout>
        <Layout.Section>
          <Post post={fakePost} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Polaris;
