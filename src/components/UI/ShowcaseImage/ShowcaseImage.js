import React from "react";

const ShowcaseImage = props => {
  const details = props.details;
  console.log("showcase", props);
  return <img src={details.image} width="100%" />;
};

export default ShowcaseImage;
