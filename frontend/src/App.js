import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <switch>
        <Route path="/" exact component={Login} />
        <Route path="/timeline" component={Timeline} />
      </switch>
     </BrowserRouter>
    );
  }
}

export default App;
