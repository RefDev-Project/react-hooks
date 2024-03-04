import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }
  return (
    <div className="flex gap-4 m-10">
      {count < 0 ? (
        ""
      ) : (
        <button className="bg-blue-500 px-4 rounded-md text-white font-semibold" onClick={handleDecrement}>
          -
        </button>
      )}
      <h1>{count < 0 ? "cannot be negative" : count}</h1>
      <button className="bg-blue-500 px-4 rounded-md text-white font-semibold" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default UseState;
