/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleTambah = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  function handleKurang() {
    setCount((count) => count - 1);
  }
  return (
    <>
      <button className="bg-blue-600 p-2 text-white rounded-md ml-4" onClick={handleKurang}>
        -
      </button>
      <h1 className="ml-4">{count}</h1>
      <button className="bg-blue-600 p-2 text-white rounded-md ml-4" onClick={handleTambah}>
        +
      </button>
    </>
  );
}

export default UseCallback;
