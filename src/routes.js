import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';

export default (
  <Route path="/app" component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
);
