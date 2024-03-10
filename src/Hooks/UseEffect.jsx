import { useEffect, useState } from "react";

function UseEffect() {
  const [products, setProducts] = useState([]);

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
              <th>Nama : </th>
              <td>{product.title}</td>
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
