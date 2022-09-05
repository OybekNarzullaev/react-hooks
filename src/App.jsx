// useEffect
import UseEffectCleanUp from "./Components/use_effect/UseEffectCleanUp";
import MultipleReducers from "./Components/use_reducer/MultipleReducers";

// useReducer
import UseReducer from "./Components/use_reducer/UseReducer";
import UserReducerObject from "./Components/use_reducer/UserReducerObject";

// useReducer with useContext
import MainUseReducer from "./Components/useReducer_useContext/Main";

// useCallback
import MainUseCallback from "./Components/useCallback/Main";
import Main from "./Components/useReducer_useContext/Main";

// useMemo
import MainUseMemo from "./Components/useMemo/Main";

// useTransition
import MainUseTransition from "./Components/use_transition/Main";

const App = () => {
  return (
    <div className="main">
      {/* ----- useEffect ----- */}
      {/* <UseEffectCleanUp /> */}

      {/* ----- useReducer ----- */}
      {/* <UseReducer /> */}
      {/* <UserReducerObject /> */}
      {/* <MultipleReducers /> */}

      {/* ----- useReducer with useContext ----- */}
      {/* <Main /> */}

      {/* ----- useCallback ----- */}
      {/* <MainUseCallback /> */}

      {/* ----- useMemo ----- */}
      {/* <MainUseMemo /> */}

      {/* ----- useTransition ----- */}
      <MainUseTransition />
    </div>
  );
};

export default App;
