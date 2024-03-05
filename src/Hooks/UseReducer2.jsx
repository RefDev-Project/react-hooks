import { useReducer } from "react";

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

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default UseReducer2;
