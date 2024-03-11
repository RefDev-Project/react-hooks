import { useContext } from "react";
import UseEffect from "./Hooks/UseEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseReducer2 from "./Hooks/UseReducer2";
import UseState from "./Hooks/UseState";
import { DarkMode } from "./Hooks/UseContext";

function ComponentHooks() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  function handleMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
      <button className="hover:bg-blue-700 bg-blue-500 px-4 rounded-md text-white font-semibold mt-5" onClick={handleMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <UseState />
      <UseReducer2 />
      <UseEffect />
      <UseLayoutEffect />
    </div>
  );
}

export default ComponentHooks;
