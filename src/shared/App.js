import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, LandingPage, LoginPage, SendMoney, Orders } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/sendmoney" component={SendMoney} />
        <Route path="/orders" component={Orders} />
      </div>
    );
  }
}

export default App;
