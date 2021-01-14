// TO DO
// Skeleton loading

import React from 'react';
import {useQuery} from '@apollo/client';
import {DisplayText} from '@shopify/polaris';

import Post from '../Post';

import * as styles from './styles.module.scss';
import {POSTS_QUERY} from './graphql';

function PostFeed() {
  const {loading, error, data} = useQuery(POSTS_QUERY);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <div className={styles.PostFeed}>
      <DisplayText size="large">Whitter feed</DisplayText>
      <ul>
        {data.microposts.map((post) => (
          <Post key={`post--${post.createdAt}`} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostFeed;
