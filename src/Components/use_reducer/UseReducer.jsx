import { useReducer } from "react";

// initialState
const initialState = 0;

// reducer function
const reducerFunc = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1>UseReducer</h1>
      <p>count: {count}</p>
      <div>
        <button onClick={() => dispatch("increment")}>increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    </div>
  );
};

export default UseReducer;
