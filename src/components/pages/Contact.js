import React from "react";
import Title from "../UI/titles/Titles";

const Contact = () => {
  return (
    <Title
      title="Contact"
      subtitle={
        <p>
          <a href="mailto:hello@joeay.co.uk">hello@joeay.co.uk</a>, easy.
        </p>
      }
    />
  );
};

export default Contact;
