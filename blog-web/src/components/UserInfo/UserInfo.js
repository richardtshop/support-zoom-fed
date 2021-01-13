import React from 'react';
import * as styles from './styles.module.scss';
import md5 from 'md5';

function UserInfo({ user }) {
  const { name, microposts, following, followers, email } = user;
  
  const gravatar_id = md5(email);
  const size = 80;
  const gravatar_url = `https://secure.gravatar.com/avatar/${gravatar_id}?s=${size}`;
  
  return (
    <div className={styles.UserInfo}>
      <section className="user-info">
        <img className="gravatar" src={gravatar_url} alt="user gravatar" />

        <span>
          <h2>{name}</h2>
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




