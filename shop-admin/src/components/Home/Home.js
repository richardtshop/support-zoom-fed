/* eslint-disable no-empty-function */

// TO DO - Import custom styles module for divs etc if needed

import React from 'react';
import {
  Page,
  Layout,
  Card,
  TextStyle,
  TextContainer,
  Heading,
  Stack,
  Icon,
  MediaCard,
  VideoThumbnail,
  Popover,
  ActionList,
  Button,
} from '@shopify/polaris';
import {
  PopularMajor,
  UnfulfilledMajor,
  ChevronRightMinor,
  MobileHorizontalDotsMajor,
} from '@shopify/polaris-icons';

function Home() {
  const activator = (
    <Button
      // onClick={toggleMenuoverActive}
      plain
      icon={MobileHorizontalDotsMajor}
    />
  );

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <TextContainer spacing="loose">
            <TextStyle variation="subdued">
              <p>Here&#39;s what happening with your store today.</p>
            </TextStyle>
          </TextContainer>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <Card.Section subdued>
              <Stack alignment="center">
                <Icon source={PopularMajor} color="inkLightest" />
                <TextContainer spacing="loose">
                  <TextStyle variation="subdued">
                    <Heading>No store activity</Heading>
                    Your sales, orders, and session will show here.
                  </TextStyle>
                </TextContainer>
              </Stack>
            </Card.Section>
          </Card>
          <Card>
            <Card.Section>
              <Stack alignment="center" distribution="equalSpacing">
                <Icon source={UnfulfilledMajor} color="indigo" />
                <Stack.Item fill>
                  <TextContainer spacing="loose">
                    <TextStyle>
                      <Heading>1 order to fulfill</Heading>
                    </TextStyle>
                  </TextContainer>
                </Stack.Item>
                <Icon source={ChevronRightMinor} color="inkLightest" />
              </Stack>
            </Card.Section>
          </Card>
          <MediaCard
            title="Start selling gift cards"
            primaryAction={{
              content: 'Set up gift cards',
              onAction: () => {},
            }}
            description="Learn how to set up and start selling gift cards in your online store, today."
            popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
          >
            <VideoThumbnail
              videoLength={752}
              thumbnailUrl="https://screenshot.click/15-40-xyj94-eq1n7.png"
            />
          </MediaCard>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <Stack wrap={false}>
              <Stack.Item fill>
                <div style={{wordWrap: 'break-word'}}>
                  <TextContainer>
                    <p>
                      <TextStyle variation="strong">Update type:</TextStyle>{' '}
                    </p>
                  </TextContainer>
                </div>
              </Stack.Item>
              <div style={{height: 'auto'}}>
                <Popover
                  // active={menuActive}
                  activator={activator}
                  // onClose={toggleMenuoverActive}
                >
                  <ActionList />
                </Popover>
              </div>
            </Stack>

            <img
              alt=""
              height="100%"
              style={{
                objectFit: 'center',
                objectPosition: 'center',
              }}
              src="https://screenshot.click/15-43-fn55q-trnl4.png"
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Home;
