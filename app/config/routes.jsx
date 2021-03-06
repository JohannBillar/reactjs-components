import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Movies from '../components/Movies';
import MovieDetails from '../components/MovieDetails';
import NotFound from '../components/NotFound';

require('../sass/main.scss');

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="movies" component={Movies} />
      <Route path="movie_details/:id" component={MovieDetails} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
