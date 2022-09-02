import React from "react";

const Button = ({ children, handler }) => {
  console.log(`${children} button render...`);
  return <button onClick={handler}>{children}</button>;
};

export default React.memo(Button);
