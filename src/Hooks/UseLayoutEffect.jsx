import { useContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { DarkMode } from "./UseContext";

function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    console.log("console 1");
  }, []);
  useLayoutEffect(() => {
    console.log("console 2");
  }, []);

  function handleIncrement() {
    setCount((count) => count + 1);
  }
  return (
    <>
      {console.log("console 3")}
      <button onClick={handleIncrement} className={`${isDarkMode ? "text-white" : "text-black"}`}>
        +
      </button>
      <h1>{count}</h1>
    </>
  );
}

export default UseLayoutEffect;

// useLayoutEffect : useLayoutEffect adalah fungsi yang digunakan untuk menjalankan efek layout pada komponen React.
// Fungsi ini digunakan untuk menjalankan efek layout pada komponen React. Efek layout ini biasanya digunakan
// untuk mengatur tata letak elemen HTML pada aplikasi React. perbedaan antara useLayoutEffect dan useEffect
// adalah useLayoutEffect digunakan untuk mengeksekusi efek layout pada komponen React, sedangkan useEffect
// digunakan untuk mengeksekusi efek pada komponen React.
