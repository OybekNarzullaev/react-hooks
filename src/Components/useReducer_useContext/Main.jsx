import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext({ count: 0 });

const initialState = 0;
const reducer = (state, action) => {
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

const CountContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <h1>useReducer with useContext</h1>
      <p>count {count}</p>
      {children}
    </CountContext.Provider>
  );
};

const Main = () => {
  return (
    <CountContextProvider>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CountContextProvider>
  );
};

export default Main;
