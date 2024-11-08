/* eslint-disable react/prop-types */

import { useImperativeHandle, useRef } from "react";

const CustomeInput = ({ ref, ...props }) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));
  return (
    <div>
      <input type="text" ref={inputRef} {...props} />
    </div>
  );
};

export default CustomeInput;
