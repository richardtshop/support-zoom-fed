// TO DO extract gravatar function to helper

import React from 'react';
import * as styles from './styles.module.scss';
import { Card } from '@shopify/polaris';
import md5 from 'md5';

function Post({ post }) {
  const { tag, content, user, createdAt } = post;
  const [date, time] = createdAt.split('T');
  const { name, email } = user;
  const gravatar_id = md5(email);
  const size = 80;
  const gravatar_url = `https://secure.gravatar.com/avatar/${gravatar_id}?s=${size}`;

  const tagMarkup =
    tag.length > 0 ? (
      <span className={styles.Tag}>
        <em>#{tag}</em>
      </span>
    ) : null;

  return (
    <Card sectioned>
      <li className={styles.Post}>
        <img className={styles.Gravatar} src={gravatar_url} alt="user gravatar" />
        <span className={styles.PostInner}>
          <span className={styles.User}>
            <a href="/">{name}</a>
          </span>
          <span className={styles.Content}>{content}</span>
          {tagMarkup}
          <span className={styles.Timestamp}>
            Posted: {date} - {time.slice(0, 5)}
          </span>
        </span>
      </li>
    </Card>
  );
}

export default Post;
