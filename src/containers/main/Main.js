import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from '../../components/pages/Home';
import Work from '../../components/pages/Work';
import Contact from '../../components/pages/Contact';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import c from './Main.scss';
import c_l from '../layout/Layout.scss';


class Main extends Component {
  componentWillMount = () => {
    if (!this.props.work.length) {
      this.getPortfolioItems();
    }
  }



  shouldComponentUpdate = (nextProps, nextState) => {

  }

  componentDidUpdate = prevProps => {
    window.scrollTo(0, 0);
  }

  // get base portfolio items
  getPortfolioItems = () => {
    axios.get('/wp/v2/work').then(items => {
      this.props.get_work(items.data);
    });
  }


  render() {
    return (
            <main className={c.main}>
            <div className={c_l.container}>

            <Switch>
            <Route path="/work" exact render={(props) => (
              <Work {...props} items={this.props.work} />
              )}/>
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact render={(props) => (
              <Home {...props} items={this.props.work} />
              )}/>
            </Switch>

            </div>
            </main>
            );
  }
}



const mapStatesToProps = state => {
  return {
    work: state.portfolioItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_work: work => dispatch({type: actionTypes.GET_WORK, payload: work})
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Main);