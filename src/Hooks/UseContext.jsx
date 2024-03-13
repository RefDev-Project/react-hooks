/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DarkMode = createContext();

function ComponentDarkMode({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <DarkMode.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkMode.Provider>;
}

export { DarkMode };
export default ComponentDarkMode;

// UseContext adalah fungsi yang digunakan untuk membuat state dalam aplikasi React.
// Fungsi ini digunakan untuk membuat variabel yang dapat diubah secara dinamis. kemudian menggunakan useContext untuk mengakses variabel tersebut.
// useContext juga digunakan untuk mengeksekusi efek pada komponen React.
