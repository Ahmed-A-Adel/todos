import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

function useTodoState(initialState, input) {
  const [todos, setTodos] = useLocalStorageState("todos", initialState);
  return {
    todos,
    addTodo: (value) => {
      if (todos.some((todo) => todo.edit)) {
        setTodos(
          todos.map((todo) =>
            todo.edit ? { ...todo, task: value, edit: false } : todo
          )
        );
        input.current.children[0].innerText = "Add New Todo";
      } else {
        setTodos([
          ...todos,
          { task: value, id: uuidv4(), complated: false, edit: false },
        ]);
      }
    },
    removeTodo: (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    editTodo: (id, setInput) => {
      const newTodos = todos.map((todo) => {
        // ________________________________________________________
        if (todo.id === id && !todo.edit) {
          // --------------------------------------------------
          input.current.children[1].children[0].focus();
          // --------------------------------------------------
          input.current.children[0].innerText = "Edit Todo Name";
          // --------------------------------------------------
          setInput(todo.task);
          // --------------------------------------------------
          return { ...todo, edit: true };
          // ________________________________________________________
        } else if (todo.id === id && todo.edit) {
          // --------------------------------------------------
          input.current.children[0].innerText = "Add New Todo";
          // --------------------------------------------------
          setInput("");
          // --------------------------------------------------
          return { ...todo, edit: false };
          // ________________________________________________________
        } else if (todo.edit && todo.id !== id) {
          // --------------------------------------------------
          return { ...todo, edit: false };
          // --------------------------------------------------
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
    },
    checkTodo: (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, complated: !todo.complated } : todo
      );
      setTodos(newTodos);
    },
  };
}

export default useTodoState;
