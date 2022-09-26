import React from "react";
import { useState } from "react";

function useStatedInput(initilaVal) {
  const [value, setValue] = useState(initilaVal);
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");

  return [value, handleChange, reset];
}

export default useStatedInput;
