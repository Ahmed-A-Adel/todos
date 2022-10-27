import { useState, createContext } from "react";
export const InputContext = createContext();
function InputProvider(props) {
  const [value, setValue] = useState("");
  const reset = () => setValue("");
  const handleChange = (e) => setValue(e.target.value);
  const showValue = (inputVal) => setValue(inputVal);
  const state = { value, handleChange, reset, showValue };

  return (
    <InputContext.Provider value={state}>
      {props.children}
    </InputContext.Provider>
  );
}

export default InputProvider;
