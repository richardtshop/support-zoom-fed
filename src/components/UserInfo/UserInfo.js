import React, { Component } from 'react';
import * as styles from './styles.module.scss';

class UserInfo extends Component {
  render() {
    return (
      <div className={styles.UserInfo}>
        <section className="user-info">
          <img className="gravatar" src="" alt="user gravatar" />

          <span>
            <h1>{this.props.user.name}</h1>
            <span>
              <a href="/">View my profile</a>
            </span>
            <span>{this.props.user.microposts.length} microposts</span>
          </span>
        </section>
        <section className={styles.UserStats}>
          <a href="/">
            <strong id="following" className="stat">
              {this.props.user.following}
            </strong>
            following
          </a>
          <a href="/">
            <strong id="followers" className="stat">
              {this.props.user.followers}
            </strong>
            followers
          </a>
        </section>
      </div>
    );
  }
}

export default UserInfo;
