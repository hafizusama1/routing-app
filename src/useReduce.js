import React from "react";
import "./App.css";

const initialValue = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "INCREMENT_VALUE":
      return { count: state.count + action.value };

    case "RESET":
      return initialValue;
    default:
      break;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  return (
    <div className="App">
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ value: 2, type: "INCREMENT_VALUE" });
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
