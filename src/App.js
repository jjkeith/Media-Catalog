import React, { Component } from 'react';

import './styles/index.css';
import hi5Logo from './hi5-logo.png';

import data from './data';

import Card from './card';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="">
          <img src={ hi5Logo } className="" alt="logo" />
          <h1 className="">Movie Battle</h1>
          <h2 className="">Star Wars vs. Marvel Universe</h2>
        </header>
        <Card data={ data } />
      </div>
    );
  }
}

export default App;
