// TO DO

// Choose between gql literal or from file graphql best practices says separate file

import React from 'react';
import * as styles from './styles.module.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { DisplayText } from '@shopify/polaris';
import Post from '../Post';

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
  const { loading, error, data } = useQuery(POSTS_QUERY);
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
}

export default PostFeed;
