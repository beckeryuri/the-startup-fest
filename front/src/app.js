import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ranking from './Pages/Ranking/Ranking'
import Startups from './Pages/Startups/Startups'


export default class App extends Component {
  render() {
    
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Startups} />
          <Route path='/ranking' exact component={Ranking} />
        </Switch>
      </Router>
    );
  }
} 