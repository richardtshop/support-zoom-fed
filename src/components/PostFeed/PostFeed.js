// TO DO

// Choose between gql literal or from file graphql best practices says separate file
// useQuery vs <Query /> component

import React from 'react';
import * as styles from './styles.module.scss';
import { Query, useQuery } from 'react-apollo';
import { DisplayText } from '@shopify/polaris';
import Post from '../Post';

import { gql } from 'apollo-boost';

// import IncidentsQuery from './graphql/IncidentsQuery.graphql';
const POSTS_QUERY = gql`
  {
    microposts {
      id
      content
      tag
      createdAt
      user {
        name
        email
      }
    }
  }
`;

function PostFeed() {
  return (
    <Query query={POSTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <h3>Loading...</h3>;
        if (error) {
          console.error(error);
          return <h2>Error...</h2>;
        }
        return (
          <div className={styles.PostFeed}>
            <DisplayText size="large">Whitter feed</DisplayText>
            <ul>
              {data.microposts.map((post, index) => (
                <Post key={`post--${index}`} post={post} />
              ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
}

export default PostFeed;
