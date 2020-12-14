import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Users, User } from '../features';

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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
