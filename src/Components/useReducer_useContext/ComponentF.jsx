import { useContext } from "react";
import { CountContext } from "./Main";

const ComponentF = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>ComponentF</h1>
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

export default ComponentF;
