import React from "react";
import Title from "../UI/titles/Titles";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div>
      <Title
        title="WHOOPS"
        subtitle={
          <div>
            <p>Page not found 😬 </p>
            <p>
              <Link to="/">Return home</Link>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default NotFound;
