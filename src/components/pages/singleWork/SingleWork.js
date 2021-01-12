import React from "react";
import Aux from "../../../hoc/Aux";
import Title from "../../UI/titles/Titles";
import WorkDetails from "../../UI/workDetails/WorkDetails";
import ShowcaseImage from "../../UI/showcaseImage/ShowcaseImage";
import PortfolioGrid from "../../portfolio/portfolioGrid/PortfolioGrid";

const SingleWork = props => {
  const item = props.item;
  const showcaseImages = item.showcaseImages.map(details => {
    return <ShowcaseImage details={details} />;
  });

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const nextPosts = shuffleArray(
    props.items.filter(ite => ite.slug !== item.slug)
  ).splice(0, 2);

  return (
    <Aux>
      <Title title={item.title} subtitle={<p>{props.item.description}</p>} />
      <WorkDetails details={item} />
      {showcaseImages}

      <Title title="NEXT" />
      <PortfolioGrid items={nextPosts} />
    </Aux>
  );
};

export default SingleWork;
