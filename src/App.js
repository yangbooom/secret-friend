import React, { Component } from 'react';
import './App.css';
import Content from './content'
import Store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Store />
        <Content />
      </div>
    );
  }
}

export default App;