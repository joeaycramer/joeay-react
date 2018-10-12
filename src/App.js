import React, { Component } from 'react';
import Layout from './containers/layout/Layout';
import axios from 'axios';
import classes from './App.scss';

class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default App;