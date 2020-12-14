import React from 'react';
import * as styles from './nav.module.scss';

function Nav() {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.AppHeaderInner}>
        <a id="logo" href="/">
          Curds and Whey 🧀
        </a>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="/" className="app-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="app-link">
                About
              </a>
            </li>

            <li>
              <a href="#" className="app-link">
                Log in
              </a>
            </li>
            <li>
              <a href="#" className={`app-link ${styles.NavBtn}`}>
                New post
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
