import React from 'react';
import {
  Page,
  Layout,
  Card,
  Frame,
  TextStyle,
  TextContainer,
  Banner,
} from '@shopify/polaris';

function Home() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <TextContainer>
            <TextStyle variation="subdued">
              Here&#39;s what happening with your store today.
            </TextStyle>
          </TextContainer>
          <Banner title="No store activity">
            <p>Your sales, orders, and session will show here.</p>
          </Banner>
          <Card title="Order details" sectioned>
            <p>View a summary of your order.</p>
          </Card>
          <Card title="Order details" sectioned>
            <p>View a summary of your order.</p>
          </Card>
        </Layout.Section>
      </Layout>
      <Frame>
        <Card title="Tags">
          <p>Add tags to your order.</p>
        </Card>
      </Frame>
    </Page>
  );
}

export default Home;
