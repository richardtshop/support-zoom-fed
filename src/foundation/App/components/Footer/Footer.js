import React from 'react';

function Footer() {
  return (
    <footer class="footer">
      <nav>
        <ul>
          <li>
            <a href="#" className="app-link">
              About
            </a>
          </li>
          <li></li>
          <li>
            <a href="https://news.railstutorial.org/">News</a>
          </li>
        </ul>
      </nav>
      <small>Curds and Whey blog. &copy;{new Date(Date.now()).getFullYear()}</small>
    </footer>
  );
}

export default Footer;
