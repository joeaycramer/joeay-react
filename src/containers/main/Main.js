import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withRouter } from "react-router";
import Home from "../../components/pages/Home";
import Work from "../../components/pages/Work";
import SingleWorkHolder from "../../components/pages/singleWork/SingleWorkHolder";
import Contact from "../../components/pages/Contact";
import NotFound from "../../components/pages/404";

import ThumbnailHelper from "../../helpers/thumbnailPrismicToReact";
import portfolioDataHelper from "../../helpers/portfolioPrismicToReact";

import Prismic from "../../services/prismic/portfolio";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import c from "./Main.scss";
import c_l from "../layout/Layout.scss";
import c_a from "./Animations.scss";

class Main extends Component {
  componentWillUpdate = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount = () => {
    this.getInitialThumbnails();
  };

  getSingleWork = slug => {
    const prismic = new Prismic();
    prismic.getSingleWork(slug).then(response => {
      const target_index = this.props.work.findIndex(
        item => item.slug === slug
      );
      const portfolioFixer = portfolioDataHelper(response);

      this.props.UPDATE_SINGLE_WORK(portfolioFixer, target_index);
    });
  };

  getInitialThumbnails = () => {
    const prismic = new Prismic();
    prismic.getInititalThumbnails().then(response => {
      const items = response.results.map(item => {
        return ThumbnailHelper(item);
      });

      this.props.UPDATE_WORK(items);
    });
  };

  render() {
    return (
      <main className={c.main}>
        <div className={c_l.container}>
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.pathname}
              classNames={{
                enter: c_a.FadeEnter,
                enterActive: c_a.FadeEnterActive,
                exit: c_a.FadeExit,
                exitActive: c_a.FadeExitActive
              }}
              timeout={300}
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <section className={c_a.TransitionContainer}>
                <Switch location={this.props.location}>
                  <Route
                    path="/work/:slug"
                    exact
                    render={props => (
                      <SingleWorkHolder
                        {...props}
                        items={this.props.work}
                        getItem={e => this.getSingleWork(e)}
                      />
                    )}
                  />
                  <Route
                    path="/work"
                    exact
                    render={props => (
                      <Work {...props} items={this.props.work} />
                    )}
                  />
                  <Route path="/contact" exact component={Contact} />
                  <Route
                    path="/"
                    exact
                    render={props => (
                      <Home {...props} items={this.props.work} />
                    )}
                  />
                  <Route component={NotFound} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    work: state.portfolioItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    UPDATE_WORK: work =>
      dispatch({ type: actionTypes.UPDATE_WORK, payload: work }),
    UPDATE_SINGLE_WORK: (item, target_index) =>
      dispatch({
        type: actionTypes.UPDATE_SINGLE_WORK,
        item: item,
        target_index: target_index
      })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
