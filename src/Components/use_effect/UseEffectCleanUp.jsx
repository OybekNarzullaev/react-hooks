import React, { useState } from "react";
import HookMouse from "./HookMouse";

const UseEffectCleanUp = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>UseEffectCleanUp</h1>
      <button onClick={() => setDisplay((prevState) => !prevState)}>
        Close
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default UseEffectCleanUp;
