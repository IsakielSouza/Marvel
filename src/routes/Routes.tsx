import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import ListHerois from '../pages/ListHerois';

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={ListHerois} />
    </Switch>
  )
}