import React from "react";

const Count = ({ text, count }) => {
  console.log(`${text} ${count} count render...`);
  return <div>{`${text} ${count}`}</div>;
};

export default React.memo(Count);
