import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import MovieDetails from './components/MovieDetails';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={'/movienchill/:id'} exact component={MovieDetails} />
          <Route path={'/'} component={App} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
