import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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

  shallowEqual = (objA, objB) => {
    if (objA === objB) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
      return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

shallowCompare = (nextProps, nextState) => {
  return (
          !this.shallowEqual(this.props, nextProps) ||
          !this.shallowEqual(this.state, nextState)
          );
}


shouldComponentUpdate = (nextProps, nextState) => {

}

componentDidUpdate = prevProps => {
  window.scrollTo(0, 0);
}

// get base portfolio items
getPortfolioItems = () => {
axios.get('/wp/v2/work').then(items => { // getting all work
this.props.get_work(items.data); // dispatches action
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

export default withRouter(
                          connect(mapStatesToProps, mapDispatchToProps)(Main)
                          );