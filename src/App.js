import React, { Component } from 'react';

import './styles/index.css';
import hi5Logo from './hi5-logo.png';
import Cards from './cards';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="jumbotron">
          <img src={ hi5Logo } className="pull-right" alt="logo" />
          <h1 className="display-4">Movie Battle</h1>
          <h2 className="lead">Star Wars vs. Marvel Universe</h2>
        </header>
        <Cards/>
      </div>
    );
  }
}

export default App;
