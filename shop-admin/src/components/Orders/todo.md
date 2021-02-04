# To Do

[ ] Text query
[x] Sorting UI
[x] Sorting logic
[ ] Tabs
[x] Currency conversion
[ ] Shift + select multiple orders
[x] Capitalize labels
[x] App title/tab title
[x] Move sort popover out into it's own code within ponenent (possible map with a set of data values)
[ ] Organise
[x] Refactor similar code for filters
[ ] Clear button for filters
[x] Mobile nav
[ ] Horizontal scroll

## Options for handleStatus Change

```jsx
const handleStatusChange = useCallback(
  (value, key, updater) => {
    updater(value);
    filterOrders(key, value);
  },
  [filterOrders],
);
...
const filters = [
    {
      ...
        <ChoiceList
          ...
          selected={orderStatusFilter || []}
          onChange={(value) =>
            handleStatusChange(value, 'status', setOrderStatusFilter)
          }
        />
      ),
      ...
    },
```

```jsx
const handleStatusChange = useCallback(
  (value, key) => {
    switch(key) {
      case 'status':
        setOrderStatusFilter(value);
        break;
      case 'paymentStatus':
        setPaymentStatusFilter(value);
        break;
      default:
        break
    }


    filterOrders(key, value);
  },
  [filterOrders],
);
// ...
const filters = [
    {
      // ...
        <ChoiceList
          // ...
          selected={orderStatusFilter || []}
          onChange={(value) =>
            handleStatusChange(value, 'status')
          }
        />
      ),
      //...
    },
```
