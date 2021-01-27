// To Do
//
// Filters
// Sorting
// Tabs
// Currency conversion
// Shift + select multiple orders
// Capitalize labels

import React, {useState, useCallback} from 'react';
import {
  Button,
  Filters,
  ChoiceList,
  Page,
  ResourceList,
  ResourceItem,
  Badge,
  TextStyle,
  Stack,
  Card,
  Layout,
  Checkbox,
} from '@shopify/polaris';
import {ExportMinor} from '@shopify/polaris-icons';

import {capitalize} from '../../helpers/helpers';

import {orders} from './data/orders';

export default function Orders() {
  const [displayedOrders, setDisplayedOrders] = useState(orders);
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState(null);
  const [paymentStatusFilter, setPaymentStatusFilter] = useState(null);
  const [fulfillmentStatusFilter, setFulfillmentStatusFilter] = useState(null);

  const [queryValue, setQueryValue] = useState(null);

  const filterOrder = useCallback((key, value) => {
    const filteredOrders = displayedOrders.filter((order) => value.includes(order[key]));
    setDisplayedOrders(filteredOrders);
  }, [displayedOrders]);

  const handleOrderStatusChange = useCallback(
    (value) => {
      setOrderStatusFilter(value);
      if (value.length > 0) {
        filterOrder('status', value);
      }
    },
    [filterOrder],
  );

  const handleOrderStatusRemove = useCallback(() => {
    setOrderStatusFilter(null);
    setDisplayedOrders(orders);
  }, []);

  const handlePaymentStatusChange = useCallback(
    (value) => {
      setPaymentStatusFilter(value);
      if (value.length > 0) {
        filterOrder('paymentStatus', value);
      } else {
        setDisplayedOrders(orders);
      }
    },
    [filterOrder],
  );
  const handlePaymentStatusRemove = useCallback(() => {
    setPaymentStatusFilter(null);
    setDisplayedOrders(orders);
  }, []);

  const handleFulfillmentStatusChange = useCallback(
    (value) => {
      setFulfillmentStatusFilter(value);
      if (value.length > 0) {
        filterOrder('fulfillmentStatus', value);
      } else {
        setDisplayedOrders(orders);
      }
    },
    [filterOrder],
  );
  const handleFulfillmentStatusRemove = useCallback(() => {
    setFulfillmentStatusFilter(null);
    setDisplayedOrders(orders);
  }, []);

  const handleHeadingChange = useCallback((newChange) => {
    if (newChange) {
      setSelectedItems('All');
    } else {
      setSelectedItems([]);
    }
  }, []);

  const filters = [
    {
      key: 'orderStatusFilter',
      label: 'Status',
      filter: (
        <ChoiceList
          title="Status"
          titleHidden
          choices={[
            {label: 'Open', value: 'open'},
            {label: 'Archived', value: 'archived'},
            {label: 'Canceled', value: 'canceled'},
          ]}
          selected={orderStatusFilter || []}
          onChange={handleOrderStatusChange}
        />
      ),
      shortcut: true,
    },
    {
      key: 'paymentFilter',
      label: 'Payment Status',
      filter: (
        <ChoiceList
          title="Payment status"
          titleHidden
          choices={[
            {label: 'Authorized', value: 'authorized'},
            {label: 'Paid', value: 'paid'},
            {label: 'Partially Refunded', value: 'partially Refunded'},
            {label: 'Partially Paid', value: 'partially Paid'},
            {label: 'Pending', value: 'pending'},
            {label: 'Refunded', value: 'refunded'},
            {label: 'Unpaid', value: 'unpaid'},
            {label: 'Voided', value: 'voided'},
          ]}
          selected={paymentStatusFilter || []}
          onChange={handlePaymentStatusChange}
          allowMultiple
        />
      ),
      shortcut: true,
    },
    {
      key: 'fulfillmentFilter',
      label: 'Fulfillment Status',
      filter: (
        <ChoiceList
          title="Fulfillment status"
          titleHidden
          choices={[
            {label: 'Fulfilled', value: 'fulfilled'},
            {label: 'Unfulfilled', value: 'unfulfilled'},
            {label: 'Partially fulfilled', value: 'partially fulfilled'},
            {label: 'Scheduled', value: 'scheduled'},
          ]}
          selected={fulfillmentStatusFilter || []}
          onChange={handleFulfillmentStatusChange}
          allowMultiple
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = [];

  if (!isEmpty(orderStatusFilter)) {
    const key = 'orderStatus';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, orderStatusFilter),
      onRemove: handleOrderStatusRemove,
    });
  }

  if (!isEmpty(paymentStatusFilter)) {
    const key = 'paymentStatus';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, paymentStatusFilter),
      onRemove: handlePaymentStatusRemove,
    });
  }

  if (!isEmpty(fulfillmentStatusFilter)) {
    const key = 'fulfillmentStatus';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, fulfillmentStatusFilter),
      onRemove: handleFulfillmentStatusRemove,
    });
  }

  const filterControl = (
    <>
      <Filters
        queryValue={queryValue}
        filters={filters}
        appliedFilters={appliedFilters}
        onQueryChange={setQueryValue}
      >
        <div style={{paddingLeft: '8px'}}>
          <Button>Save</Button>
        </div>
      </Filters>
      {selectedItems.length === 0 && (
        <div style={{padding: '1.2rem 2rem 0 0.8rem'}}>
          <Stack distribution="equalSpacing" alignment="center">
            <Stack.Item>
              <Checkbox
                label=""
                checked={false}
                onChange={handleHeadingChange}
              />
            </Stack.Item>
            <Stack.Item fill>
              <Stack distribution="fillEvenly" wrap={false}>
                <TextStyle variation="strong">Order</TextStyle>
                <TextStyle variation="strong">Date</TextStyle>
                <TextStyle variation="strong">Customer</TextStyle>
                <TextStyle variation="strong">Payment</TextStyle>
                <TextStyle variation="strong">Fulfillment</TextStyle>
                <Stack.Item>
                  <div style={{textAlign: 'right'}}>
                    <TextStyle variation="strong">Total</TextStyle>
                  </div>
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </div>
      )}
    </>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'orderStatus':
        return `Order status: ${value}`;
      case 'paymentStatus':
        return `Payment status: ${value.map((val) => `${val}`).join(', ')}`;
      case 'fulfillmentStatus':
        return `Fulfillment status: ${value.map((val) => `${val}`).join(', ')}`;

      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }

  function paymentCompletion(status) {
    if (status === 'paid' || status === 'refunded' || status === 'voided') {
      return ['complete', 'default'];
    } else if (
      status === 'partially paid' ||
      status === 'partially refunded' ||
      status === 'authorized'
    ) {
      return ['partiallyComplete', 'warning'];
    }
    return ['incomplete', 'attention'];
  }

  function fullfilmentCompletion(status) {
    if (status === 'fulfilled') {
      return ['complete', 'default'];
    } else if (status === 'partially fulfilled') {
      return ['partiallyComplete', 'warning'];
    }
    return ['incomplete', 'attention'];
  }

  return (
    <Page
      fullWidth
      title="Orders"
      primaryAction={{content: 'Create order'}}
      secondaryActions={[{content: 'Export', icon: ExportMinor}]}
      actionGroups={[
        {
          title: 'More actions',
          accessibilityLabel: 'More actions label',
          actions: [
            {
              content: 'View',
              disabled: true,
            },
          ],
        },
      ]}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{singular: 'order', plural: 'orders'}}
              items={displayedOrders}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
              selectable
              showHeader={selectedItems.length > 0}
              filterControl={filterControl}
              renderItem={(item) => {
                const {
                  id,
                  url,
                  orderNumber,
                  date,
                  customer,
                  paymentStatus,
                  fulfillmentStatus,
                  total,
                } = item;

                const paymentProgress = paymentCompletion(paymentStatus);
                const fulfillmentProgress = fullfilmentCompletion(
                  fulfillmentStatus,
                );
                return (
                  <ResourceItem
                    id={id}
                    url={url}
                    accessibilityLabel={`View details for ${orderNumber}`}
                    name={orderNumber}
                  >
                    <Stack distribution="fillEvenly" wrap={false}>
                      <TextStyle variation="strong">{`#${orderNumber}`}</TextStyle>
                      <TextStyle>{date}</TextStyle>
                      <TextStyle>{customer}</TextStyle>
                      <Badge
                        progress={paymentProgress[0]}
                        status={paymentProgress[1]}
                      >
                        {capitalize(paymentStatus)}
                      </Badge>
                      <Badge
                        progress={fulfillmentProgress[0]}
                        status={fulfillmentProgress[1]}
                      >
                        {capitalize(fulfillmentStatus)}
                      </Badge>
                      <Stack.Item>
                        <div style={{textAlign: 'right'}}>
                          <TextStyle>{total}</TextStyle>
                        </div>
                      </Stack.Item>
                    </Stack>
                  </ResourceItem>
                );
              }}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
