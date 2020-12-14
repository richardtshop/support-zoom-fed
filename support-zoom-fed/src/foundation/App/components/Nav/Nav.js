import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-header--inner">
          <a id="logo" href="/">Curds and Whey 🧀</a>
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <a href="#" className="app-link">Home</a>
              </li>

              <li>
                <a href="#" className="app-link">About</a>
              </li>

              <li>
                <a href="#" className="app-link">Log in</a>
              </li>
              <li>
                <a href="#" className="app-link btn">New post</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
