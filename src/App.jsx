import ComponentHooks from "./ComponentHooks";
import ComponentDarkMode from "./Hooks/UseContext";

function App() {
  return (
    <>
      <ComponentDarkMode>
        <ComponentHooks />
      </ComponentDarkMode>
    </>
  );
}

export default App;
