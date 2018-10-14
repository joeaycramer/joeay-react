import React from 'react';
import Aux from '../../hoc/Aux';
import Title from '../UI/titles/Titles';
import Prismic from 'prismic-javascript';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

// import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';



// basically go get the single work, then replace the one in the store with the one u got
// new store var of the spread old store, 

const Work = (props) => {
	const slug = props.match.params.slug;

	if ( !props.items[slug] || (props.items[slug] && !props.items[slug]['complete']) ) {
		const apiEndpoint = 'https://joeaycouk.cdn.prismic.io/api/v2';

		Prismic.api(apiEndpoint).then(api => {
			api.getByUID('portfolio', slug).then(response => {
				
				var storeCopy = props.items;
				// storeCopy = response.data;

				props.UPDATE_WORK(storeCopy);
			});
		});


	} else {
		// we got it full
	}

  


  return (
    <Aux>
    	<Title title="Issa item" subtitle={(<p>Check out a selection of some of my favourite pieces of work, some private, some for agencies</p>)} />
    </Aux>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    UPDATE_WORK: work => dispatch({type: actionTypes.UPDATE_WORK, payload: work})
  }
}

export default connect(null, mapDispatchToProps)(Work);