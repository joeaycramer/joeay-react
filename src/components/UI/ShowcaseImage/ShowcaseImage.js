import React from "react";
import c from "./showcaseImage.scss";
import LazyLoad from "react-lazyload";

const ShowcaseImage = props => {
  const details = props.details;

  return (
    <div className={c.Row}>
      {details.large_quote.length ? (
        <div className={c.Col}>
          <p className={c.LargeQuote}>{details.large_quote}</p>
        </div>
      ) : (
        ""
      )}
      <div className={c.Col}>
        <LazyLoad height="300">
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
