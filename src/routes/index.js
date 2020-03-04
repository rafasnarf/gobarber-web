import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SingIn';
import SingUP from '../pages/SingUp';
import Profile from '../pages/Profile';
import Dashbord from '../pages/Dashbord';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUP} />

      <Route path="/dashboard" component={Dashbord} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
