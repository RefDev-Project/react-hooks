import { useContext, useState } from "react";
import { DarkMode } from "./UseContext";

function UseState() {
  const [count, setCount] = useState(0);
  const isDarkMode = useContext(DarkMode);

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

// useState adalah salah satu hook yang disediakan oleh React untuk mengelola state dalam functional components. Ini memungkinkan Anda menyimpan state lokal dalam komponen Anda dan memicu re-rendering ketika nilai state tersebut berubah.

// Fungsi useState mengembalikan array dengan dua elemen. Elemen pertama adalah nilai state saat ini, dan elemen kedua adalah fungsi untuk memperbarui nilai state tersebut.
