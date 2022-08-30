import { useReducer } from "react";

const initialState = {
  firstCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + 1 };
    case "decrement":
      return { firstCount: state.firstCount - 1 };
    case "incrementFive":
      return { firstCount: state.firstCount + action.value };
    case "decrementFive":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UserReducerObject = () => {
  const [countObj, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>UserReducerObject</h1>
      <p>{countObj.firstCount}</p>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "incrementFive", value: 5 })}>
          incrementFive
        </button>
        <button onClick={() => dispatch({ type: "decrementFive", value: 5 })}>
          decrementFive
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default UserReducerObject;
