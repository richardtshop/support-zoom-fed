import React from 'react';
import * as styles from './styles.module.scss';
import Post from '../Post';

function PostFeed() {
  const posts = [1, 1, 1, 1, 1, 1];

  return (
    <div className={styles.PostFeed}>
      <h2>Whitter feed</h2>
      <ul>
        {posts.map(() => (
          <Post />
        ))}
      </ul>
    </div>
  );
}

export default PostFeed;
