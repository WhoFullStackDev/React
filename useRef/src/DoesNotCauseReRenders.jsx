import { useState, useRef, useEffect } from "react";

const DoesNotCauseReRenders = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>Does Not Cause Re-renders</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export default DoesNotCauseReRenders;
