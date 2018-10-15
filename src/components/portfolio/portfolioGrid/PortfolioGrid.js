import React from 'react';
import c from './PortfolioGrid.scss';
import Loader from '../../UI/loader/Loader';
import PortfolioItem from '../portfolioItem/PortfolioItem';

const PortfolioGrid = (props) => {
	let items = (
		<Loader />
		);

	if (Object.keys(props.items).length > 0) {

		items = Object.keys(props.items).map((key, index) => {
			return <PortfolioItem
							key={props.items[key].slug}
							title={props.items[key].thumbnail_title}
							color={props.items[key].thumbnail_colour}
							link={props.items[key].slug}
							image={props.items[key].thumbnail_image.url} />
		});
	}

  return (
    <div className={c.grid}>
    	{items}
    </div>
  )
}

export default PortfolioGrid;