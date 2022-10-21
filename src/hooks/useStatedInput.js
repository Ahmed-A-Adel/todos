import { useState } from "react";

function useStatedInput(initilaVal) {
  const [value, setValue] = useState(initilaVal);
  const [label, setLabel] = useState("Add New Todo");
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");
  const showValue = (value) => setValue(value);
  const handleLabel = (value) => setLabel(value);

  return [value, handleChange, reset, showValue, label, setLabel];
}

export default useStatedInput;
