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
      console.log('grid', item.data);
			return <PortfolioItem
							key={item.uid}
							title={item.data.thumbnail_title}
							color={item.data.thumbnail_colour}
							link={item.uid}
							image={item.data.thumbnail_image.url} />
		});
	}

  return (
    <div className={c.grid}>
    	{items}
    </div>
  )
}

export default PortfolioGrid;