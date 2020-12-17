// Create a new Route for '/polaris' that displays a full page blog post. 
// The page will be composed entirely of Polaris components. 
// All data from the Post must be displayed on this page.
// The route does NOT need to be linked too in your blog, but the url 'localhost:3000/Polaris' should bring up the page. Use this page as a place to experiment with Polaris Components and see if any could be useful in other places in your blog.


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Users, User, Polaris } from '../features';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/:id">
          <User />
        </Route>
        <Route exact path="/polaris">
          <Polaris />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
