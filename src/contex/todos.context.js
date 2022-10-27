import React, { createContext, createRef } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer";
export const TodosContext = createContext();
export const DispatchContext = createContext();

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
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialState,
    todoReducer
  );
  const state = { todos, foucsInput };

  // _________ Varibales ______________________
  return (
    <TodosContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
export default TodosProvider;
