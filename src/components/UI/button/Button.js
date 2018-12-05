import React from "react";
import { Link } from "react-router-dom";
import c from "./Button.scss";

const Button = props => {
  return (
    <Link className={c.Button} to={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
