import React from "react";
import Title from "../UI/titles/Titles";
import Button from "../UI/button/Button";
import BoxedImageAndText from "../UI/boxedImageAndText/BoxedImageAndText";
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
          <a href="https://www.w12studios.com/" target="_blank" rel="noopener">
            W12 Studios
          </a>
          , an Interactive Design Studio in Camden, where I'm a Senior Creative Technologist. I've
          previously worked for {" "}
          <a href="http://arcadiagroup.co.uk" target="_blank" rel="noopener">
            Arcadia
          </a>, <a href="https://www.charliehr.com/" target="_blank" rel="noopener">
            CharlieHR
          </a>, 
          <a href="http://evemattress.co.uk" target="_blank" rel="noopener">
            eve Sleep
          </a>, 
          and {" "}
          <a href="http://drewlondon.co.uk" target="_blank" rel="noopener">
            Drew London
          </a>.
        </p>
      </BoxedImageAndText>

      <Title title="WORK" />
      <PortfolioGrid items={fourItems} />

      <Button link="/work">See all</Button>
    </Aux>
  );
};

export default Home;
