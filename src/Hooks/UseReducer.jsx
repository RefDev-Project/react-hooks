import { useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "increment_age":
      return {
        name: count.name,
        age: count.age + 1,
      };
    case "changed_name":
      return {
        name: action.nextName,
        age: count.age,
      };
  }
  throw Error("Unknown action" + action.type);
}

const initialState = {
  name: "John",
  age: 30,
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "increment_age" });
  }

  function handleNameChange(e) {
    dispatch({ type: "changed_name", nextName: e.target.value });
  }
  return (
    <>
      <input value={count.name} onChange={handleNameChange} className="border" />
      <button onClick={handleButtonClick}> Increment age</button>
      <p>
        Hello,{count.name}. You are {count.age}
      </p>
    </>
  );
}

export default UseReducer;

// useReducer : useReducer adalah fungsi yang digunakan untuk membuat state dalam aplikasi React.
// Fungsi ini digunakan untuk membuat variabel yang dapat diubah secara dinamis. hampir sama dengan useState,
// perbedaanya adalah state yang ditampung di reducer menggunakan fungsi reducer yang dibuat sendiri
// seperti diatas yang dibuat sendiri di reducer.
