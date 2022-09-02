import React from "react";

const Title = ({ title }) => {
  console.log(`${title} title render...`);
  return <h1>{title}</h1>;
};

export default React.memo(Title);
