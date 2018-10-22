import React from 'react';
import Aux from '../../hoc/Aux';
import Title from '../UI/titles/Titles';
import Prismic from 'prismic-javascript';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

// import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const Work = (props) => {
	const slug = props.match.params.slug;

	if (!props.items.length){
		//  404
		console.log('items not ready');
	} else if (props.items.length && !props.items.some(item => item.slug === slug)) {
		console.log('item doesnt exist');
	} else if (props.items.length && props.items.some(item => item.slug === slug)) {
		console.log('item exits');
		
		var itemIndex = props.items.findIndex(item => item.slug === slug),
		item = props.items.find(item => item.slug === slug);

		if (item['title']) {
			console.log('we got full deetz already');
		} else {
			console.log('getting full deetz from prismic');
			props.getItem(slug);
		}

	}


	return (
		<Aux>
		<Title title="woof" subtitle={(<p>Check out a selection of some of my favourite pieces of work, some private, some for agencies</p>)} />
		</Aux>
		)
}


const mapDispatchToProps = dispatch => {
	return {
		UPDATE_WORK: work => dispatch({type: actionTypes.UPDATE_WORK, payload: work})
	}
}

export default connect(null, mapDispatchToProps)(Work);