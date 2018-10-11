import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Layout from './containers/layout/Layout';
import axios from 'axios';
import classes from './App.scss';

axios.defaults.baseURL = 'http://api.joeay.co.uk/wp-json/';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
      </Aux>
    );
  }
}

export default App;