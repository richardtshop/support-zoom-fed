// To Do
//
// [ ] Text query
// [x] Sorting UI
// [x] Sorting logic
// [ ] Tabs
// [x] Currency conversion
// [ ] Shift + select multiple orders
// [x] Capitalize labels
// [x] App title/tab title
// [x] Move sort popover out into it's own code within componenent (possible map with a set of data values)
// [ ] Organise
// [ ] Refactor similar code for filters
// [ ] Clear button for filters
// [x] Mobile nav
// Horizontal scroll

import React, {useState, useCallback, useEffect} from 'react';
import {
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
  Button,
  Popover,
  RadioButton,
} from '@shopify/polaris';
import {ExportMinor, SortMinor} from '@shopify/polaris-icons';

import {capitalize, convertCents} from '../../helpers/helpers';

import * as styles from './styles.module.scss';
import {orders} from './data/orders';

export default function Orders() {
  const [displayedOrders, setDisplayedOrders] = useState(orders);
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState(null);
  const [paymentStatusFilter, setPaymentStatusFilter] = useState(null);
  const [fulfillmentStatusFilter, setFulfillmentStatusFilter] = useState(null);
  const [sortValue, setSortValue] = useState('orderNumberAscending');
  const [sortPopoverActive, setSortPopoverActive] = useState(false);
  const [queryValue, setQueryValue] = useState(null);

  const defaultActiveFilters = {
    status: [],
    paymentStatus: [],
    fulfillmentStatus: [],
  };

  const [activeFilters, setActiveFilters] = useState(defaultActiveFilters);

  useEffect(() => {
    document.title = `Shop admin | Orders`;
  });

  const toggleSortPopoverActive = useCallback(
    () => setSortPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const filterOrders = useCallback(
    (filterKey, filterArray) => {
      const newFilters = {
        ...activeFilters,
        [filterKey]: filterArray,
      };
      setActiveFilters(newFilters);

      let filteredOrders = orders;

      for (const [key, value] of Object.entries(newFilters)) {
        if (value.length > 0) {
          filteredOrders = filteredOrders.filter((order) => {
            return value.includes(order[key]);
          });
        }
        setDisplayedOrders(filteredOrders);
      }
    },
    [activeFilters],
  );

  const handleOrderStatusChange = useCallback(
    (value) => {
      setOrderStatusFilter(value);
      filterOrders('status', value);
    },
    [filterOrders],
  );

  const handleOrderStatusRemove = useCallback(() => {
    setOrderStatusFilter(null);
    filterOrders('status', []);
  }, [filterOrders]);

  const handlePaymentStatusChange = useCallback(
    (value) => {
      setPaymentStatusFilter(value);
      filterOrders('paymentStatus', value);
    },
    [filterOrders],
  );
  const handlePaymentStatusRemove = useCallback(() => {
    setPaymentStatusFilter(null);
    filterOrders('paymentStatus', []);
  }, [filterOrders]);

  const handleFulfillmentStatusChange = useCallback(
    (value) => {
      setFulfillmentStatusFilter(value);
      filterOrders('fulfillmentStatus', value);
    },
    [filterOrders],
  );
  const handleFulfillmentStatusRemove = useCallback(() => {
    setFulfillmentStatusFilter(null);
    filterOrders('fulfillmentStatus', []);
  }, [filterOrders]);

  const handleHeadingChange = useCallback((newChange) => {
    if (newChange) {
      setSelectedItems('All');
    } else {
      setSelectedItems([]);
    }
  }, []);

  const sortOrders = (key) => {
    const sortKeys = {
      orderNumberAscending: ['id', 'ascending'],
      orderNumberDescending: ['id', 'descending'],
      dateOldestFirst: ['date', 'ascending'],
      dateNewestFirst: ['date', 'descending'],
      customerNameAZ: ['customer', 'ascending'],
      customerNameZA: ['customer', 'descending'],
      paymentStatusAZ: ['paymentStatus', 'ascending'],
      paymentStatusZA: ['paymentStatus', 'descending'],
      fulfillmentStatusAZ: ['fulfillmentStatus', 'ascending'],
      fulfillmentStatusZA: ['fulfillmentStatus', 'descending'],
      totalPriceLowHigh: ['total', 'ascending'],
      totalPriceHighLow: ['total', 'descending'],
    };

    return sortKeys[key];
  };

  const getCustomerSortName = (customer) => {
    const customerArray = customer.split(' ');
    return customerArray[customerArray.length - 1];
  };

  const handleSortChange = useCallback(
    (_checked, newValue) => {
      // implement sorting logic
      // 1. Have it always sorted by a specific intial value (order number) and this will update it
      // 2. Only sort at this point (don't sort first)

      const [key, order] = sortOrders(newValue);

      const sortedOrders = displayedOrders.sort((currentOrder, nextOrder) => {
        let current = currentOrder[key];
        let next = nextOrder[key];

        // sort my customer surname (or single name if only one name)
        if (key === 'customer') {
          current = getCustomerSortName(current);
          next = getCustomerSortName(next);
        }

        // sort date by date format
        if (key === 'date') {
          current = Date.parse(current);
          next = Date.parse(next);
        }

        if (order === 'descending') {
          if (next < current) {
            return -1;
          }
          if (current > next) {
            return 1;
          }
          return 0;
        } else {
          if (current < next) {
            return -1;
          }
          if (next > current) {
            return 1;
          }
          return 0;
        }
      });
      setDisplayedOrders(sortedOrders);
      setSortValue(newValue);
    },
    [displayedOrders],
  );

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
      hideClearButton: true,
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
      hideClearButton: true,
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
      hideClearButton: true,
      shortcut: true,
    },
  ];

  const appliedFilters = [];

  const popOverContent = [
    {
      label: 'Order number (ascending)',
      id: 'orderNumberAscending',
    },
    {
      label: 'Order number (descending)',
      id: 'orderNumberDescending',
    },
    {
      label: 'Date (oldest first)',
      id: 'dateOldestFirst',
    },
    {
      label: 'Date (newest first)',
      id: 'dateNewestFirst',
    },
    {
      label: 'Customer name (A-Z)',
      id: 'customerNameAZ',
    },
    {
      label: 'Customer name (Z-A)',
      id: 'customerNameZA',
    },
    {
      label: 'Payment status (A-Z)',
      id: 'paymentStatusAZ',
    },
    {
      label: 'Payment status (Z-A)',
      id: 'paymentStatusZA',
    },
    {
      label: 'Fulfillment status (A-Z)',
      id: 'fulfillmentStatusAZ',
    },
    {
      label: 'Fulfillment status (Z-A)',
      id: 'fulfillmentStatusZA',
    },
    {
      label: 'Total price (low to high)',
      id: 'totalPriceLowHigh',
    },
    {
      label: 'Total price (high to low)',
      id: 'totalPriceHighLow',
    },
  ];

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

  const sortActivator = (
    <Button onClick={toggleSortPopoverActive} icon={SortMinor}>
      Sort
    </Button>
  );

  const filterControl = (
    <>
      <Stack>
        <Stack.Item fill>
          <Filters
            queryValue={queryValue}
            filters={filters}
            appliedFilters={appliedFilters}
            onQueryChange={setQueryValue}
          />
        </Stack.Item>
        <>
          <Popover
            active={sortPopoverActive}
            activator={sortActivator}
            onClose={toggleSortPopoverActive}
          >
            <Card>
              <Card.Section>
                <Stack vertical spacing="extraTight">
                  <TextStyle variation="subdued">Sort by</TextStyle>
                  {popOverContent.map((option) => (
                    <RadioButton
                      key={`sortOption-${option.id}`}
                      label={option.label}
                      checked={sortValue === option.id}
                      id={option.id}
                      name="sortOrders"
                      onChange={handleSortChange}
                    />
                  ))}
                </Stack>
              </Card.Section>
            </Card>
          </Popover>
        </>
      </Stack>
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
        return `Order status: ${value
          .map((val) => `${capitalize(val)}`)
          .join(', ')}`;
      case 'paymentStatus':
        return `Payment status: ${value
          .map((val) => `${capitalize(val)}`)
          .join(', ')}`;
      case 'fulfillmentStatus':
        return `Fulfillment status: ${value
          .map((val) => `${capitalize(val)}`)
          .join(', ')}`;

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

  function renderItem(item) {
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
    const fulfillmentProgress = fullfilmentCompletion(fulfillmentStatus);
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
          <Badge progress={paymentProgress[0]} status={paymentProgress[1]}>
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
              <TextStyle>{convertCents(total)}</TextStyle>
            </div>
          </Stack.Item>
        </Stack>
      </ResourceItem>
    );
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
            <div className={styles.tableWrapper}>
              <ResourceList
                className={styles.tableWrapper}
                resourceName={{singular: 'order', plural: 'orders'}}
                items={displayedOrders}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                showHeader={selectedItems.length > 0}
                filterControl={filterControl}
                renderItem={renderItem}
              />
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
