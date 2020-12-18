import React from 'react';
import * as styles from './nav.module.scss';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.AppHeaderInner}>
        <Link id="logo" to="/">
          Curds and Whey 🧀
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/" className="app-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="app-link">
                About
              </Link>
            </li>

            <li>
              <Link to="#" className="app-link">
                Log in
              </Link>
            </li>
            <li>
              <Link to="#" className={`app-link ${styles.NavBtn}`}>
                New post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
