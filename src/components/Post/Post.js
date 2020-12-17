import React from 'react';
import * as styles from './styles.module.scss';
import { Card } from '@shopify/polaris';

function Post({ post }) {
  const { tag, content, user } = post;
  return (
    <Card sectioned>
      
    <li className={styles.Post}>
      <img className={styles.Gravatar} src="" alt="user gravatar" />
      <span className={styles.PostInner}>
        <span className={styles.User}>
          <a href="/">{user.name}</a>
        </span>
        <span className={styles.Content}>{content}</span>
        <span className={styles.Tag}>
          <em>#{tag}</em>
        </span>
        <span className={styles.Timestamp}>Posted 4 days ago.</span>
      </span>
    </li>
    </Card>
  );
}

export default Post;
