import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import FreeGames from './FreeGames';
import PictologoPrivacyPolicy from './PictologoPrivacyPolicy';

const routing = (
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/free-games" component={FreeGames} />
      <Route path="/pictologo-privacy-policy" component={PictologoPrivacyPolicy} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
