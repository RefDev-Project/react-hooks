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
              <tr>
                <th className={`text-${isDarkMode ? "white" : "black"}`}>Nama : </th>
                <td className={`text-${isDarkMode ? "white" : "black"}`}>{product.title}</td>
              </tr>
            </thead>
          </table>
        );
      })}
    </>
  );
}

export default UseEffect;
// useEffect adalah salah satu dari beberapa hooks yang disediakan oleh React untuk mengelola efek samping dalam functional components. Efek samping bisa berupa melakukan permintaan HTTP, berlangganan ke sumber data eksternal, menetapkan event listener, dan lain sebagainya.

// useEffect memungkinkan Anda menjalankan kode efek samping setiap kali terjadi perubahan pada komponen, seperti setelah render pertama, setiap kali perubahan pada state atau props terjadi, atau bahkan ketika komponen dihapus dari DOM.
