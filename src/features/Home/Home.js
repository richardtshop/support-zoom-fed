import React, { useState } from 'react';
import * as styles from './styles.module.scss';
import { PostFeed, UserInfo } from '../../components';

function Home() {
  
  const user = { name: 'Richard', followers: 23, following: 15, microposts: [1, 2] };

  return (
    <div className={styles.UserPage}>
      <aside>
        <UserInfo user={user} />
      </aside>
      <PostFeed />
    </div>
  );
}

export default Home;
