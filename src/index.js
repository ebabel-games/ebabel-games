import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './Home';
import FreeGames from './FreeGames';
import PictologoPrivacyPolicy from './PictologoPrivacyPolicy';
import NotFound from './NotFound';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/free-games" component={FreeGames} />
      <Route path="/pictologo-privacy-policy" component={PictologoPrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
