import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUP from '../pages/SignUp';
import Profile from '../pages/Profile';
import Dashbord from '../pages/Dashbord';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUP} />

      <Route path="/dashboard" component={Dashbord} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
