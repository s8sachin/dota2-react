import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import FourOhFour from '../FourOhFour';
import CarouselView from '../CarouselView';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carouselView" component={CarouselView} />
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}

export default App;
