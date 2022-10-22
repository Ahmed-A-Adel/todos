import { useState, createContext } from "react";
export const InputContext = createContext();
function InputProvider(props) {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("Add New Todo");
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");
  const showValue = (inputVal) => setValue(inputVal);

  const state = { value, handleChange, reset, showValue, label, setLabel };
  return (
    <InputContext.Provider value={state}>
      {props.children}
    </InputContext.Provider>
  );
}

export default InputProvider;
