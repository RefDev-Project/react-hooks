import { createContext, useContext, useState } from "react";

const ThemeDarkMode = createContext();

export default function UseContext2() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeDarkMode.Provider value={{ theme, setTheme }}>
      <div className={`border border-gray-600 w-4/6 p-5 ${theme ? "bg-black" : "bg-white"}`}>
        <h1 className={`text-${theme ? "white" : "black"}`}>Welcome</h1>
        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 px-2 rounded-md text-white py-2" type="submit">
            Sign Up
          </button>
          <button className="bg-blue-600 px-2 rounded-md text-white py-2" type="submit">
            Login
          </button>
        </div>
        <Input />
      </div>
    </ThemeDarkMode.Provider>
  );
}

function Input() {
  function handleChangeMode() {
    setTheme((theme) => !theme);
  }
  const { theme, setTheme } = useContext(ThemeDarkMode);
  return (
    <div className="flex gap-2 mt-10">
      <input type="checkbox" checked={theme} onChange={handleChangeMode} id="check" />
      <label htmlFor="check" className={`text-${theme ? "white" : "black"}`}>
        {theme ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
}
