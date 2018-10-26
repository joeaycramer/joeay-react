import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import c from './PortfolioItem.scss';

const PortfolioItem = (props) => {
	let title = props.title.split(' ').map(word => {
		return (
			<span key={word}>
				{word}
			</span>
		);
	});

	return (
		<Aux>
			<div className={c.item}>
				<Link to={'/work/' + props.link}>
					<div className={c.colorOverlay} style={{backgroundColor: props.color }}></div>
					<div className={c.image} style={{backgroundImage: `url(${props.image})`}}></div>
					<div className={c.title}>
						{title}
					</div>
				</Link>
			</div>

		</Aux>
		)
}

export default PortfolioItem;