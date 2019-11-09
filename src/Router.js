import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function Routers() {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
      </BrowserRouter>
  );
}
