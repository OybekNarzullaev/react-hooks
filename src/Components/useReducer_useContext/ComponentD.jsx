import { useContext } from "react";
import { CountContext } from "./Main";

const ComponentD = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h1>ComponentD</h1>
      <button onClick={() => countContext.countDispatch("increment")}>
        increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>reset</button>
    </div>
  );
};

export default ComponentD;
