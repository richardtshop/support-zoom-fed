import React from 'react';
import * as styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <nav>
        <ul>
          <li>
            <a href="/about" className="app-link">
              About
            </a>
          </li>
        </ul>
      </nav>
      <small>Curds and Whey blog. &copy;{new Date(Date.now()).getFullYear()}</small>
    </footer>
  );
}

export default Footer;
