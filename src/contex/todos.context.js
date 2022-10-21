import React, { createContext, createRef } from "react";
import useStatedInput from "../hooks/useStatedInput";
import useTodoState from "../hooks/useTodoState";
export const TodosContext = createContext();

const TodosProvider = (props) => {
  // _________ Varibales ______________________
  const foucsInput = createRef();

  const initialState = [
    {
      task: "Read The Secert Gaurdn",
      id: 12,
      edit: false,
      complated: false,
    },
  ];
  const todosState = useTodoState(initialState, foucsInput);
  const inputState = useStatedInput("");
  // _________ Varibales ______________________
  return (
    <TodosContext.Provider value={{ todosState, foucsInput, inputState }}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosProvider;
