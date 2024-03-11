import { useContext, useEffect, useState } from "react";
import { DarkMode } from "./UseContext";

function UseEffect() {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error Fetching Data : ", error.message);
    }
  }

  return (
    <>
      {products.map((product) => {
        return (
          <table key={product.id}>
            <thead>
              <th className={`text-${isDarkMode ? "white" : "black"}`}>Nama : </th>
              <td className={`text-${isDarkMode ? "white" : "black"}`}>{product.title}</td>
            </thead>
          </table>
        );
      })}
    </>
  );
}

export default UseEffect;

// useEffect : useEffect adalah fungsi yang digunakan untuk menjalankan efek pada komponen React. Fungsi ini
// digunakan untuk mengeksekusi efek pada komponen React. Perbedaan antara useEffect dan useLayoutEffect
// adalah useEffect digunakan untuk mengeksekusi efek pada komponen React, sedangkan useLayoutEffect
// digunakan untuk mengeksekusi efek layout pada komponen React.
