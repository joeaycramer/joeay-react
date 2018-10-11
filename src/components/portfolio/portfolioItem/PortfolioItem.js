import React from 'react';
import Aux from '../../../hoc/Aux';
import c from './PortfolioItem.scss';

const PortfolioItem = (props) => {
	let title = '';
		title = props.title.split(' ').map(word => {
		return (
			<span key={word}>
				{word}
			</span>
		);
	});

	return (
		<Aux>
			<div className={c.item}>
				<div className={c.colorOverlay} style={{backgroundColor: props.color }}></div>
				<div className={c.image} style={{backgroundImage: `url(${props.image})`}}></div>
				<div className={c.title}>
					{title}
				</div>
			</div>
		</Aux>
		)
}

export default PortfolioItem;