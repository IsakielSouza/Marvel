import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import ListHerois from '../pages/ListHerois';
import DetailsHeroes from '../pages/DetailsHeroes';

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={ListHerois} />
      <Route path='/detailsherois' component={DetailsHeroes} />
    </Switch>
  )
}