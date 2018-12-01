import React from "react";
import Aux from "../../../hoc/Aux";
import Title from "../../UI/titles/Titles";
import WorkDetails from "../../UI/workDetails/WorkDetails";
import ShowcaseImage from "../../UI/showcaseImage/showcaseImage";
// import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const SingleWork = props => {
  const item = props.item;
  const showcaseImages = item.showcaseImages.map(details => {
    return <ShowcaseImage details={details} />;
  });

  return (
    <Aux>
      <Title title={item.title} subtitle={<p>{props.item.description}</p>} />
      <WorkDetails details={item} />
      {showcaseImages}
    </Aux>
  );
};

export default SingleWork;
