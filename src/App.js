import React, { Component } from 'react';
import { Grid, Image, Jumbotron } from 'react-bootstrap';

import './styles/index.css';
import hi5Logo from './hi5-logo.png';
import Cards from './cards';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Jumbotron componentClass='header'>
          <Image src={ hi5Logo } className="jumbotron-logo" alt="h15.agency logo" responsive />
          <h1><strong>Movie Battle</strong></h1>
          <h2>Star Wars vs. Marvel Cinematic Universe</h2>
        </Jumbotron>
        <Cards/>
      </Grid>
    );
  }
}

export default App;
