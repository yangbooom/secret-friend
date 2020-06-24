import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, LandingPage, LoginPage } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
