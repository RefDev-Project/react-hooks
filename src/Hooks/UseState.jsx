import { useContext, useState } from "react";
import { DarkMode } from "./UseContext";

function UseState() {
  const [count, setCount] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }
  return (
    <div className={`flex gap-4 m-10 ${isDarkMode ? "text-white" : "text-black"}`}>
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

// useState : useState adalah fungsi yang digunakan untuk membuat state dalam aplikasi React.
// Fungsi ini digunakan untuk membuat variabel yang dapat diubah secara dinamis.
