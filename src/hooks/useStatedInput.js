import { useState } from "react";

function useStatedInput(initilaVal) {
  const [value, setValue] = useState(initilaVal);
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");
  const showValue = (value) => setValue(value);

  return [value, handleChange, reset, showValue];
}

export default useStatedInput;
