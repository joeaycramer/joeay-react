import React from "react";
import Title from "../UI/titles/Titles";
import Button from "../UI/button/Button";
import BoxedImageAndText from "../UI/boxedImageAndText/boxedImageAndText";
import PortfolioGrid from "../portfolio/portfolioGrid/PortfolioGrid";
import Aux from "../../hoc/Aux";

const Home = props => {
  const fourItems = props.items.slice(0, 4);

  return (
    <Aux>
      <Title title="ABOUT ME" />

      <BoxedImageAndText image="https://prismic-io.s3.amazonaws.com/joeaycouk%2F6cde8cd8-d0db-4404-be91-091e305ff5f8_img_8511-compressed.jpg">
        <p>
          I'm Joe, a Frontend Developer, based in London. I currently work for{" "}
          <a href="https://www.charliehr.com/" target="_blank" rel="noopener">
            CharlieHR
          </a>
          , a online platform that helps manage tedious HR tasks. I've
          previously worked at an eCommerce, mattress-in-a-box, startup called{" "}
          <a href="http://evemattress.co.uk" target="_blank" rel="noopener">
            eve Sleep
          </a>
          , and at a branding agency called{" "}
          <a href="http://drewlondon.co.uk" target="_blank" rel="noopener">
            Drew London
          </a>
           before that.
        </p>
      </BoxedImageAndText>

      <Title title="WORK" />
      <PortfolioGrid items={fourItems} />

      <Button link="/work">See all</Button>
    </Aux>
  );
};

export default Home;
