import React from 'react';
import c from './Footer.scss';

const Footer = (props) => {
	const d = new Date();
	const year = d.getFullYear(); 

	return (
		<div className={c.footer}>
			<p>
				© Joeay {year}
			</p>
	</div>
	)
}

export default Footer;