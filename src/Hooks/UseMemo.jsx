import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [redButton, setRedButton] = useState(false);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  function colorButton() {
    return setRedButton(!redButton);
  }

  const kuadrat = useMemo(() => {
    console.log("calculation kuadrat");
    return count * 2;
  }, [count]);

  return (
    <div className="m-10 border p-10 flex justify-center gap-5">
      <button className={`${redButton ? "bg-red-700" : "bg-blue-700"} text-white rounded-md p-2 hover:bg-blue-400`} onClick={colorButton}>
        ganti warna button {redButton ? "Menjadi Biru" : "Menjadi Merah"}
      </button>
      <button className={`${redButton ? "bg-red-700" : "bg-blue-700"} text-white rounded-md p-2 hover:bg-blue-400`} onClick={increment}>
        Increment
      </button>
      <h1>{count} x 2</h1>
      <button className={`${redButton ? "bg-red-700" : "bg-blue-700"} text-white rounded-md p-2 hover:bg-blue-400`} onClick={decrement}>
        Decrement
      </button>
      <div>
        <p>Hasil Perhitungan :</p>
        <p>
          <b className={`${redButton ? "text-red-700" : "text-blue-700"}`}>{kuadrat}</b>
        </p>
      </div>
    </div>
  );
}

export default UseMemo;
