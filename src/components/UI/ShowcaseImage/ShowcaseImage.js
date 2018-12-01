import React from "react";
import c from "./showcaseImage.scss";
import LazyLoad from "react-lazyload";

const ShowcaseImage = props => {
  const details = props.details;

  return (
    <div className={c.Row}>
      {details.large_quote.length ? (
        <div className={(c.Col, c.LargeQuote)}>
          <p>{details.large_quote}</p>
        </div>
      ) : (
        ""
      )}
      <div className={c.ShowcaseImage}>
        <LazyLoad height="400" once="true">
          {details.caption.length ? (
            <p className={c.Caption}>{details.caption}</p>
          ) : (
            ""
          )}
          <img src={details.image} />
        </LazyLoad>
      </div>
    </div>
  );
};

export default ShowcaseImage;
