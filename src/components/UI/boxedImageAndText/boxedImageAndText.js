import React from 'react';
import c from './BoxedImageAndText.scss';

const boxedImageAndText = (props) => {
	return (
		<div className={c.boxedImageAndText}>
			<div className={c.text}>
				{props.children}
			</div>

			<div className={c.image} style={{backgroundImage: `url(${props.image})` } }></div>
		</div>
	)
}

export default boxedImageAndText;