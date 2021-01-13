import React from 'react';
import * as styles from './styles.module.scss';
import { PostFeed, UserInfo, PostForm } from '../../components';

function Home() {
  const user = { name: 'Richard', followers: 23, following: 15, microposts: [1, 2], email: "example@railstutorial.org" };

  return (
    <div className={styles.UserPage}>
      <aside className={styles.SideBar}>
        <UserInfo user={user} />
        <PostForm />
      </aside>
      <PostFeed />
    </div>
  );
}

export default Home;
