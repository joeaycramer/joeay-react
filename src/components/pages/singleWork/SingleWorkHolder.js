import React from 'react';
import Aux from '../../../hoc/Aux';
import SingleWorkLoader from './SingleWorkLoader';
import SingleWork from './SingleWork';

const SingleWorkHolder = (props) => {
	const slug = props.match.params.slug;
	let content = <SingleWorkLoader />;

	if (!props.items.length){
		//  404
		console.log('items are not ready');
	} else if (props.items.length && !props.items.some(item => item.slug === slug)) {
		console.log('item doesn\'t exist');
	} else if (props.items.length && props.items.some(item => item.slug === slug)) {
		console.log('item exits in the items list');
		
		let item = props.items.find(item => item.slug === slug);

		if (item['title']) {
			console.log('we already have the full details');
			content = <SingleWork item={item} />;

		} else {
			console.log('we need to get full details from prismic');
			props.getItem(slug);
		}

	}


	return (
		<Aux>
		{ content }
		</Aux>
		)
}

export default SingleWorkHolder;