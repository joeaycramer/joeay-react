import React from 'react';
import Aux from '../../../hoc/Aux';
import Title from '../../UI/titles/Titles';
import WorkDetails from '../../UI/workDetails/WorkDetails';

// import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const SingleWork = (props) => {
	const item = props.item;

	return (
		<Aux>
		<Title title={item['title']} subtitle={(<p>{props.item['description'][0]['text']}</p>)} />
    <WorkDetails details={item} />
    
		</Aux>
		)
}

export default SingleWork;