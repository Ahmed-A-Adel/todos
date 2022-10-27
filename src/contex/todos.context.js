import React, { createContext, createRef } from "react";
import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";
import { useReducer } from "react";
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
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const state = { todos, foucsInput };

  // const todosState = useTodoState(initialState, foucsInput);
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
