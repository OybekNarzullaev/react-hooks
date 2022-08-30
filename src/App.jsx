// useEffect
import UseEffectCleanUp from "./Components/use_effect/UseEffectCleanUp";

// useReducer
import UseReducer from "./Components/use_reducer/UseReducer";
import UserReducerObject from "./Components/use_reducer/UserReducerObject";

const App = () => {
  return (
    <div className="main">
      {/* ----- useEffect ----- */}
      <UseEffectCleanUp />

      {/* ----- useReducer ----- */}
      {/* <UseReducer />
      <UserReducerObject /> */}
    </div>
  );
};

export default App;
