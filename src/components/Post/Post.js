import React from 'react';
import * as styles from './styles.module.scss';

function Post() {
  return (
    <li className={styles.Post}>
      <img className={styles.Gravatar} src="" alt="user gravatar" />
      <span className={styles.PostInner}>
        <span className={styles.User}>
          <a href="/">Name</a>
        </span>
        <span className={styles.Content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at mollis orci, et fringilla est. Mauris a nunc
          nec tortor dapibus dictum. Suspendisse laoreet, lorem a laoreet consequat, turpis augue volutpat neque, at
          mollis dui dolor at leo. Curabitur aliquet mollis metus nec mollis. Nam lobortis ultricies arcu, eget egestas
          turpis consequat ac.
        </span>
        <span className={styles.Tag}>
          <em>#tag</em>
        </span>
        <span className={styles.Timestamp}>Posted 4 days ago.</span>
      </span>
    </li>
  );
}

export default Post;
