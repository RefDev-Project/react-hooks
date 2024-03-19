import { useContext } from "react";
import UseEffect from "./Hooks/UseEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseReducer2 from "./Hooks/UseReducer2";
import UseState from "./Hooks/UseState";
import { DarkMode } from "./Hooks/UseContext";
import UseContext2 from "./Hooks/UseContext2";
import UseRef from "./Hooks/UseRef";
import ParentComponent from "./Hooks/UseImperativeHandle";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
import UseId from "./Hooks/UseId";

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
      <UseId />
      <UseMemo />
      <UseCallback />
      <UseContext2 />
      <UseState />
      <UseReducer2 />
      <UseEffect />
      <UseLayoutEffect />
      <UseRef />
      <ParentComponent />
    </div>
  );
}

export default ComponentHooks;
