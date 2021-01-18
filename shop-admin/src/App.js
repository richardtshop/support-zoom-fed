import React, {useCallback, useState} from 'react';
import '@shopify/polaris/dist/styles.css';
import {Frame, TopBar, Navigation, EmptyState} from '@shopify/polaris';
import {
  HomeMajor,
  OrdersMajor,
  ProductsMajor,
  CustomersMajor,
  AnalyticsMajor,
  MarketingMajor,
  DiscountsMajor,
  AppsMajor,
  OnlineStoreMajor,
  CirclePlusOutlineMinor,
  ViewMinor,
  SettingsMinor,
} from '@shopify/polaris-icons';

import {Home, Orders, Products} from './components';

function App() {
  const [menuState, setMenuState] = useState('home');
  const setPageMarkup = useCallback((value) => setMenuState(value), []);

  const userMenuMarkup = (
    <TopBar.UserMenu initials="🧀" name="Richard T" detail="2020 Cohort" />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      placeholder="Search"
      // onChange={() => {}}
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            url: '/',
            label: 'Home',
            onClick: () => setPageMarkup('home'),
            icon: HomeMajor,
          },
          {
            label: 'Orders',
            onClick: () => setPageMarkup('orders'),
            icon: OrdersMajor,
            badge: '1',
          },
          {
            label: 'Products',
            onClick: () => setPageMarkup('products'),
            icon: ProductsMajor,
          },
          {
            label: 'Customers',
            onClick: () => setPageMarkup('empty'),
            icon: CustomersMajor,
          },
          {
            label: 'Analytics',
            onClick: () => setPageMarkup('empty'),
            icon: AnalyticsMajor,
          },
          {
            label: 'Marketing',
            onClick: () => setPageMarkup('empty'),
            icon: MarketingMajor,
          },
          {
            label: 'Discounts',
            onClick: () => setPageMarkup('empty'),
            icon: DiscountsMajor,
          },
          {
            label: 'Apps',
            onClick: () => setPageMarkup('empty'),
            icon: AppsMajor,
          },
        ]}
      />
      <Navigation.Section
        fill
        title="Sales Channels"
        items={[
          {
            label: 'Online Store',
            onClick: () => setPageMarkup('empty'),
            icon: OnlineStoreMajor,
            secondaryAction: {
              url: '/admin/orders/add',
              accessibilityLabel: 'Add an order',
              icon: ViewMinor,
            },
          },
        ]}
        action={{
          accessibilityLabel: 'Add sales channel',
          icon: CirclePlusOutlineMinor,
        }}
      />
      <Navigation.Section
        items={[
          {
            label: 'Settings',
            icon: SettingsMinor,
          },
        ]}
      />
    </Navigation>
  );

  const getCurrentMarkup = () => {
    switch (menuState) {
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
      case 'empty':
        return <Empty />;
      default:
        return <Home />;
    }
  };

  return (
    <Frame topBar={topBarMarkup} navigation={navigationMarkup}>
      {getCurrentMarkup()}
    </Frame>
  );
}

export default App;

function Empty() {
  return (
    <EmptyState
      heading="Manage your inventory transfers"
      action={{content: 'Add transfer'}}
      secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
      image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    >
      <p>Track and receive your incoming inventory from suppliers.</p>
    </EmptyState>
  );
}
