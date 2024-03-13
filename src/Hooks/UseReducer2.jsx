import { useContext, useReducer } from "react";
import { DarkMode } from "./UseContext";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
  }
  throw Error("Uknown Action" + action.type);
}

function UseReducer2() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const isDarkMode = useContext(DarkMode);

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
      <button onClick={handleDecrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default UseReducer2;
