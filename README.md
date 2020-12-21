# Week 4 notes

## Mutations

### Backend

<details>
<summary>Backend</summary>
Added the following to `schema.rb` to allow mutations to work.

```rb
mutation(Types::MutationType)
```

Cors issue - but it resolved it for me for the time being in config/application.rb

```rb

module SupportZoomRailsTutorial2020
  class Application < Rails::Application
    ...
    # Start of added cors middleware
    config.middleware.insert_before 0, Rack::Cors do
      allow do
         origins '*'
         resource '*', :headers => :any, :methods => [:get, :post, :options]
       end
    end
    # End of cors middleware
    ...
  end
end
```

</details>

### Frontend

<details>
<summary>Apollo hooks</summary>

Getting an error when trying to add `useMutation` from `@apollo/react-hooks`.

Some research showed this was likely due to conflicts in packages that had been previously used.

Updated to used `@apollo/client`

OLD index.js

```js
...
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
  uri: 'https://support-zoom-rails-tutorial-2020.myshopify.io/graphql',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
...
```

NEW index.js (not package imports and client now takes uri directly.)

```js
...
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://support-zoom-rails-tutorial-2020.myshopify.io/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
...
```

`useQuery`, `useMutation` and `gql` all now importated from `@apollo/client`

</details>

<details>
<summaryUpdating UI after mutation</summary>

https://www.apollographql.com/docs/react/data/mutations/ - but use `writeQuery` instead of write fragment, and pass microposts query.

```js
const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  type
                }
              `,
            });
            return [...existingTodos, newTodoRef];
          },
        },
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

</details>
