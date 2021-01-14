import React from 'react';
import md5 from 'md5';

import * as styles from './styles.module.scss';

function UserInfo({user}) {
  const {name, microposts, following, followers, email} = user;

  const gravatarId = md5(email);
  const size = 80;
  const gravatarUrl = `https://secure.gravatar.com/avatar/${gravatarId}?s=${size}`;

  return (
    <div className={styles.UserInfo}>
      <section className="user-info">
        <img className="gravatar" src={gravatarUrl} alt="user gravatar" />T
        <>
          <h2>{name}</h2>
          <a href="/">View my profile</a>
          <span>{microposts.length} microposts</span>
        </>
      </section>
      <section className={styles.UserStats}>
        <a href="/">
          <strong id="following" className="stat">{following}</strong> following
        </a>
        <a href="/">
          <strong id="followers" className="stat">{followers}</strong> followers
        </a>
      </section>
    </div>
  );
}

export default UserInfo;
