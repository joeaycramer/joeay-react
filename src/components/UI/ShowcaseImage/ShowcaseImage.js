import React from "react";
import c from "./ShowcaseImage.scss";
import LazyLoad from "react-lazyload";

const ShowcaseImage = props => {
  const { details } = props;
  const removeShadow = details.remove_shadow ? c.NoShadow : "";

  return (
    <div className={c.Row}>
      {details.large_quote.length ? (
        <div className={[c.Col, c.LargeQuote].join(" ")}>
          <p>{details.large_quote}</p>
        </div>
      ) : (
        ""
      )}
      <div className={[c.ShowcaseImage, removeShadow].join(" ")}>
        <LazyLoad height={400} once offset={100}>
          {details.caption.length ? (
            <p className={c.Caption}>{details.caption}</p>
          ) : (
            ""
          )}
          <img src={details.image} alt={details.large_quote} />
        </LazyLoad>
      </div>
    </div>
  );
};

export default ShowcaseImage;
