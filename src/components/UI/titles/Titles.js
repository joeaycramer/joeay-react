import React from "react";
import c from "./Titles.scss";

const Titles = props => {
  const classes = {
    title: `${c.title} ${props.loading ? c.loading : ""}`,
    subtitle: `${c.subtitle} ${props.loading ? c.loading : ""}`
  };

  const subtitle = props.subtitle ? (
    <div className={classes.subtitle}>{props.subtitle}</div>
  ) : null;

  return (
    <React.Fragment>
      <h1 className={classes.title}>{props.title}</h1>

      {subtitle}
    </React.Fragment>
  );
};

export default Titles;
