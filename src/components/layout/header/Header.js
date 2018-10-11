import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import c from './Header.scss';
import c_l from '../../../containers/layout/Layout.scss';
import logo from '../../../assets/images/logos/joeay-logo.svg'

const Header = (props) => {

	let menuItems = props.nav.map(item => {
		return (
				<li key={item.name}>
					<NavLink to={item.link} activeClassName={c.active}> {item.name} </NavLink>
				</li>
			);
	});

	return (
		<div className={c.header}>
			<div className={c_l.container}>
				<div className={c.logo}>
					<Link to="/">
						<img src={logo} alt="Joeay Logo" />
					</Link>
				</div>

				<nav>
					<ul>
					{menuItems}
					</ul>
				</nav>

			</div>
		</div>
	)
}

export default Header;