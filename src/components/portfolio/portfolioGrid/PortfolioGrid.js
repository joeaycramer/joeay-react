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
							key={item.slug}
							title={item.thumbnail_title}
							color={item.thumbnail_colour}
							link={item.slug}
							image={item.thumbnail_image.url} />
		});
	}

  return (
    <div className={c.grid}>
    	{items}
    </div>
  )
}

export default PortfolioGrid;