import React from 'react';
import { Link } from 'react-router-dom';
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
		<React.Fragment>
			<div className={c.item}>
				<Link to={'/work/' + props.link}>
					<div className={c.colorOverlay} style={{backgroundColor: props.color }}></div>
					<div className={c.image} style={{backgroundImage: `url(${props.image})`}}></div>
					<div className={c.title}>
						{title}
					</div>
				</Link>
			</div>

		</React.Fragment>
		)
}

export default PortfolioItem;