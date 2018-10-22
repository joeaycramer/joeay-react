import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Prismic from 'prismic-javascript';
import Home from '../../components/pages/Home';
import Work from '../../components/pages/Work';
import SingleWorkHolder from '../../components/pages/singleWork/SingleWorkHolder';
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
				Prismic.Predicates.at('document.type', 'portfolio'), {
					fetch : [
					'portfolio.thumbnail_title',
					'portfolio.thumbnail_image',
					'portfolio.thumbnail_colour'
					],
					orderings : '[my.portfolio.date_completed desc]'
				}
				).then(response => {
					const items = [];

					response.results.map(item => {
						items.push({
							slug: item.uid,
							thumbnail_title: item.data.thumbnail_title,
							thumbnail_image: item.data.thumbnail_image,
							thumbnail_colour: item.data.thumbnail_colour,
						});
						return true;
					});

					this.props.UPDATE_WORK(items);
				});
			});
	}





	loadPortfolioItem = (slug) => {
		console.log('loading item', slug);
		const apiEndpoint = 'https://joeaycouk.cdn.prismic.io/api/v2';

		Prismic.api(apiEndpoint).then(api => {
				api.getByUID('portfolio', slug).then(response => {
					let target_index = this.props.work.findIndex(item => item.slug === slug);

					this.props.UPDATE_SINGLE_WORK(response.data, target_index);
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
			<Route path="/cats/:slug" exact render={(props) => (
				<SingleWorkHolder {...props} items={this.props.work} getItem={(e) => this.loadPortfolioItem(e)} />
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


const mapStateToProps = state => {
	return {
		work: state.portfolioItems
	}
}

const mapDispatchToProps = dispatch => {
	return {
		UPDATE_WORK: work => dispatch({type: actionTypes.UPDATE_WORK, payload: work}),
		UPDATE_SINGLE_WORK: (item, target_index) => dispatch({type: actionTypes.UPDATE_SINGLE_WORK, item: item, target_index: target_index}),
	}
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Main)
	);