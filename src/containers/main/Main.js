import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import Prismic from 'prismic-javascript';
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


  // shouldComponentUpdate = (nextProps, nextState) => {
  //     return true;
  // }

  componentDidUpdate = prevProps => {
    window.scrollTo(0, 0);
  }




  // get base portfolio items
  getPortfolioItems = () => {
    const apiEndpoint = 'https://joeaycouk.cdn.prismic.io/api/v2';
 
    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'portfolio'),
        { fetch : ['portfolio.thumbnail_title', 'portfolio.thumbnail_image', 'portfolio.thumbnail_colour'] }
      ).then(response => {
        this.props.get_work(response.results);
      });
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