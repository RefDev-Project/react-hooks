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

// useLayoutEffect adalah hook lain yang disediakan oleh React yang mirip dengan useEffect, tetapi dieksekusi secara sinkron setelah semua DOM mutasi. Ini berbeda dari useEffect, yang dieksekusi secara asynchronous setelah render selesai.

// Penggunaan umum dari useLayoutEffect adalah ketika Anda perlu melakukan sesuatu yang membutuhkan ukuran atau posisi aktual dari elemen DOM atau Anda ingin memastikan bahwa efek samping Anda diaplikasikan sebelum pengguna melihat perubahan layar.
