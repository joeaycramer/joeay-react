import React from 'react';
import Aux from '../../../hoc/Aux';
import Title from '../../UI/titles/Titles';

// import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const SingleWork = (props) => {
	return (
		<Aux>
		<Title title={props.item['title']} subtitle={(<p>{props.item['description'][0]['text']}</p>)} />
		</Aux>
		)
}

export default SingleWork;