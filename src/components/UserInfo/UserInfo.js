import React from 'react';
import * as styles from './styles.module.scss';

function UserInfo({ user }) {
  const { name, microposts, following, followers } = user;
  return (
    <div className={styles.UserInfo}>
      <section className="user-info">
        <img className="gravatar" src="" alt="user gravatar" />

        <span>
          <h1>{name}</h1>
          <span>
            <a href="/">View my profile</a>
          </span>
          <span>{microposts.length} microposts</span>
        </span>
      </section>
      <section className={styles.UserStats}>
        <a href="/">
          <strong id="following" className="stat">
            {following}
          </strong>
          following
        </a>
        <a href="/">
          <strong id="followers" className="stat">
            {followers}
          </strong>
          followers
        </a>
      </section>
    </div>
  );
}

export default UserInfo;
