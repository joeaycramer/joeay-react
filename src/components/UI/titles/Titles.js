import React from 'react';
import Aux from '../../../hoc/Aux';
import c from './Titles.scss';

const Titles = (props) => {
	const subtitle = props.subtitle ? (<div className={c.subtitle}>{props.subtitle}</div>) : null;

	return (
		<Aux>
			<h1 className={c.title}>
				{props.title}
			</h1>

			{subtitle}
		</Aux>
	)
}

export default Titles;