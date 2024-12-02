import { useRef } from "react";
import CustomeInput from "./CustomeInput";

function App() {
  const inputRef = useRef();

  const handleFocuse = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <>
      <CustomeInput placeholder="Enter your input" ref={inputRef} />
      <button onClick={handleFocuse}>Focus</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
}

export default App;
