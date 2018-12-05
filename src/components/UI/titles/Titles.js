import React from "react";
import Aux from "../../../hoc/Aux";
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
    <Aux>
      <h1 className={classes.title}>{props.title}</h1>

      {subtitle}
    </Aux>
  );
};

export default Titles;
