/* eslint-disable @shopify/jsx-no-complex-expressions */
/* eslint-disable no-empty-function */

// TO DO - Import custom styles module for divs etc if needed

import React, {useState, useCallback} from 'react';
import {
  ActionList,
  Badge,
  Button,
  Card,
  Heading,
  Icon,
  Layout,
  Link,
  MediaCard,
  Page,
  Popover,
  Stack,
  Subheading,
  TextContainer,
  TextStyle,
  VideoThumbnail,
} from '@shopify/polaris';
import {
  PopularMajor,
  UnfulfilledMajor,
  ChevronRightMinor,
  MobileHorizontalDotsMajor,
} from '@shopify/polaris-icons';

function Home() {
  const [covidPopoverActive, setCovidPopoverActive] = useState(false);
  const [domainPopoverActive, setDomainPopoverActive] = useState(false);

  const toggleCovidPopoverActive = useCallback(
    () => setCovidPopoverActive((popoverActiveState) => !popoverActiveState),
    [],
  );

  const toggleDomainPopoverActive = useCallback(
    () => setDomainPopoverActive((popoverActiveState) => !popoverActiveState),
    [],
  );

  const covidPopoverActivator = (
    <Button
      onClick={toggleCovidPopoverActive}
      plain
      icon={MobileHorizontalDotsMajor}
    />
  );

  const domainPopoverActivator = (
    <Button
      onClick={toggleDomainPopoverActive}
      plain
      icon={MobileHorizontalDotsMajor}
    />
  );

  return (
    <div
      style={{display: 'grid', gridTemplateColumns: '2fr 1fr', height: '100%'}}
    >
      <Layout>
        <Layout.Section>
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

                <Card>
                  <Card.Header>
                    <Popover
                      active={covidPopoverActive}
                      activator={covidPopoverActivator}
                      onClose={toggleCovidPopoverActive}
                    >
                      <ActionList items={[{content: '👋'}]} />
                    </Popover>
                  </Card.Header>
                  <Card.Section>
                    <Stack distribution="center">
                      <img
                        alt=""
                        height="100%"
                        style={{
                          objectFit: 'center',
                          objectPosition: 'center',
                        }}
                        src="https://screenshot.click/15-43-fn55q-trnl4.png"
                      />
                    </Stack>
                    <Stack distribution="center">
                      <Stack.Item>
                        <TextContainer>
                          <Stack distribution="center">
                            <Heading element="h3">
                              Get extra support during COVID-19
                            </Heading>
                          </Stack>
                          <p
                            style={{
                              textAlign: 'center',
                              maxWidth: '600px',
                            }}
                          >
                            We have launched a series of live webinars and a
                            dedicatedCOVID-19 forum. Ask questions, share
                            stories, and learn how other businesses are
                            adapting. We&apos;re working on more ways to help
                            support you, so watch for more updates soon.
                          </p>
                          <Stack distribution="center">
                            <Button>Learn more about our response</Button>
                          </Stack>
                        </TextContainer>
                      </Stack.Item>
                    </Stack>
                  </Card.Section>
                </Card>
                <Card>
                  <Card.Header title="Add you own domain to strengthen your brand">
                    <Popover
                      active={domainPopoverActive}
                      activator={domainPopoverActivator}
                      onClose={toggleDomainPopoverActive}
                    >
                      <ActionList items={[{content: '👋'}]} />
                    </Popover>
                  </Card.Header>
                  <Card.Section>
                    <TextContainer>
                      <p
                        style={{
                          maxWidth: '600px',
                        }}
                      >
                        You current domain is{' '}
                        <TextStyle>aptghost.myshopify.com</TextStyle>. Add or
                        buy a custom domain to help customers remember your
                        online store.
                      </p>
                      <Button>Learn more about our response</Button>
                    </TextContainer>
                  </Card.Section>
                </Card>
              </Layout.Section>
            </Layout>
          </Page>
        </Layout.Section>
      </Layout>
      <Card>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <Card.Section>
            <Stack distribution="fillEvenly">
              <DisclosureButton fullWidth buttonText="All Channels" />
              <DisclosureButton fullWidth buttonText="Today" />
            </Stack>
          </Card.Section>
          <SidebarCardSection
            title="Total sales"
            date="Today"
            content="There were no sales during this time"
          />
          <SidebarCardSection
            title="Total sales breakdown"
            date="Today"
            content="There were no sales during this time"
          />
          <SidebarCardSection
            title="Total sale by channel"
            date="Today"
            content="There were no sales during this time"
          />
          <SidebarCardSection
            title="Top products"
            date="Today"
            content="There were no products sold during this time"
          />
          <Card.Section subdued>
            <Card.Subsection>
              <Subheading>Payout Schedule</Subheading>
              <Stack distribution="equalSpacing">
                <Stack.Item>
                  February 28 <Badge status="success">Paid</Badge>
                </Stack.Item>
                <Stack.Item>$50.04</Stack.Item>
              </Stack>
              <Stack distribution="equalSpacing">
                <Stack.Item>
                  February 18 <Badge status="success">Paid</Badge>
                </Stack.Item>
                <Stack.Item>$45.82</Stack.Item>
              </Stack>
              <Stack distribution="equalSpacing">
                <Stack.Item>Balance</Stack.Item>
                <Stack.Item>$0.00</Stack.Item>
              </Stack>
            </Card.Subsection>
            <Card.Subsection>
              <TextContainer>
                <TextStyle variation="subdued">
                  <p>Your next payout is estimate for April 17.</p>
                </TextStyle>
                <p>
                  <Link url="https://help.shopify.com/manual">
                    View all payouts
                  </Link>
                </p>
              </TextContainer>
            </Card.Subsection>
          </Card.Section>
          <hr
            style={{
              border: '0',
              height: '0.1rem',
              width: '100%',
              background: '#dfe3e8',
            }}
          />
          <div style={{flexGrow: '1', backgroundColor: '#f9fafb'}}>
            <Card.Section subdued>
              <ActivityFeed />
            </Card.Section>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;

function DisclosureButton({buttonText, fullWidth = false}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Button
      fullWidth={fullWidth}
      disclosure={expanded ? 'up' : 'down'}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      {buttonText}
    </Button>
  );
}

function SidebarCardSection({title, date, content}) {
  return (
    <Card.Section>
      <Stack distribution="equalSpacing">
        <Subheading>{title}</Subheading>
        <TextStyle variation="subdued">{date}</TextStyle>
      </Stack>
      <TextStyle variation="subdued">{content}</TextStyle>
    </Card.Section>
  );
}

function ActivityFeed() {
  const feedItems = [
    {
      id: 1,
      activity: (
        <>
          Printful: Print-on-demand published a product:{' '}
          <Link url="https://help.shopify.com/manual">OG Rectangle Warmth</Link>
        </>
      ),
      date: 'March 5, 2020, 11:50 a.m. EST',
    },
    {
      id: 2,
      activity: (
        <>
          Printful: Print-on-demand published a product:{' '}
          <Link url="https://help.shopify.com/manual">OG Square Warmth</Link>
        </>
      ),
      date: 'March 5, 2020, 11:30 a.m. EST',
    },
    {
      id: 3,
      activity: 'You added user: Justin Dempsey',
      date: 'March 4, 2020, 01:52 p.m. EST',
    },
  ];

  return (
    <>
      <Subheading>Activity</Subheading>
      <TextContainer>
        {feedItems.map((feedItem) => (
          <p key={feedItem.id}>
            {feedItem.activity}
            <br />
            <TextStyle variation="subdued">{feedItem.date}</TextStyle>
          </p>
        ))}
        <p>
          <Link url="/">View all recent activity</Link>
        </p>
      </TextContainer>
    </>
  );
}
