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

// useReducer adalah hook lain yang disediakan oleh React untuk mengelola state dalam functional components. Ini biasanya digunakan untuk kasus di mana state memiliki logika kompleks atau ketika beberapa nilai state saling terkait. useReducer mirip dengan useState, tetapi menggunakan pendekatan yang lebih fleksibel dengan menggunakan sebuah reducer.

// Reducer adalah sebuah fungsi yang mengambil dua argumen, yaitu state saat ini dan aksi yang ingin dilakukan pada state tersebut, dan mengembalikan state yang baru. Aksi ini biasanya berupa objek yang memiliki sebuah properti type yang mendefinisikan tipe aksi yang dilakukan dan properti lain yang berisi data tambahan yang diperlukan untuk melakukan aksi tersebut.
