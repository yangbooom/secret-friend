import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Chinese from './Chinese';
import Chicken from './Chicken';
import Dosirak from './Dosirak';
import Latinol from './Latinol';


class App extends Component {
  render() {
    return (
      <div>
        <ul>
        <li>
            <Link to="/Chinese">Chinese page</Link>
          </li>
          <li>
            <Link to="/Chicken">Chicken page</Link>
          </li>
          <li>
            <Link to="/Dosirak">Dosirak page</Link>
          </li>
          <li>
            <Link to="/Latinol">Latinol page</Link>
          </li>
          </ul>

        <Route path="/Chinese" component={Chinese} />
        <Route path="/Chicken" component={Chicken} />
        <Route path="/Dosirak" component={Dosirak} />
        <Route path="/Latinol" component={Latinol} />
      </div>
    );
  }
}


export default App;