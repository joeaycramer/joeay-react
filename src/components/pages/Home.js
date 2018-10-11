import React from 'react';
import Title from '../UI/titles/Titles';
import Button from '../UI/button/Button';
import BoxedImageAndText from '../UI/boxedImageAndText/boxedImageAndText';
import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const Home = (props) => {
	const fourItems = props.items.slice(0, 4);
	return (
		<div>
			<Title title="ABOUT ME" />
			
			<BoxedImageAndText image="http://joeay.co.uk/wp-content/uploads/2016/02/IMG_8511.jpg?id=48937">
				<p>
					I’m Joe, a Frontend Developer, based in London. I currently work for <a href="http://evemattress.co.uk" target="_blank">Eve Sleep</a>, an eCommerce startup based in Camden. I also occasionally do some freelance work for all sorts of clients. You can find me on <a href="https://twitter.com/JOEAYCRAMER/" target="_blank">Twitter</a>… normally tweeting people problems with their websites.
				</p>
			</BoxedImageAndText>

			<Title title="WORK" />

			<PortfolioGrid items={fourItems} />

			<Button link="/work">See all</Button>
		</div>
	)
}

export default Home;