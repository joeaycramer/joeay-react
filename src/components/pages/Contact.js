import React from "react";
import Title from "../UI/titles/Titles";

const Contact = props => {
  return (
    <div>
      <Title
        title="Contact"
        subtitle={
          <p>
            <a href="mailto:hello@joeay.co.uk">hello@joeay.co.uk</a>, easy.
          </p>
        }
      />
    </div>
  );
};

export default Contact;
