import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './foundation/App/App';
import reportWebVitals from './reportWebVitals';

// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
  uri: 'https://support-zoom-rails-tutorial-2020.myshopify.io/graphql',
});

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
