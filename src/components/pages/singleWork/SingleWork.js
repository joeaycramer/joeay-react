import React from "react";
import Aux from "../../../hoc/Aux";
import Title from "../../UI/titles/Titles";
import WorkDetails from "../../UI/workDetails/WorkDetails";
import ShowcaseImage from "../../UI/ShowcaseImage/ShowcaseImage";

// import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const SingleWork = props => {
  const item = props.item;
  const showcase_datas =

  return (
    <Aux>
      <Title
        title={item["title"]}
        subtitle={<p>{props.item["description"][0]["text"]}</p>}
      />
      <WorkDetails details={item} />
      <ShowcaseImage details={item.body} />
    </Aux>
  );
};

export default SingleWork;
