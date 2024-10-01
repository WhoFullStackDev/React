import { useRef } from "react";

const AccessingDOMElements = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <h1>Accessing DOM Elements</h1>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default AccessingDOMElements;
