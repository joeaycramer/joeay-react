import React from 'react';
import c from './PortfolioGrid.scss';
import Loader from '../../UI/loader/Loader';
import PortfolioItem from '../portfolioItem/PortfolioItem';

const PortfolioGrid = (props) => {
	let items = (
		<Loader />
		);

	if (props.items.length > 0) {
		items = props.items.map(item => {
			return <PortfolioItem
							key={item.id}
							title={item.title.rendered}
							color={item.acf['brand-colors']}
							link={item.link}
							image={item.acf.thumbnail} />
		});
	}

  return (
    <div className={c.grid}>
    	{items}
    </div>
  )
}

export default PortfolioGrid;