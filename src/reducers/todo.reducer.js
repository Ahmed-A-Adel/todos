import { v4 as uuidv4 } from "uuid";

export default function todoReducer(state, action) {
  switch (action.type) {
    // _____________________ ADD Todo _________________________________________
    case "ADD":
      return state.some((todo) => todo.edit)
        ? state.map((todo) =>
            todo.edit ? { ...todo, task: action.task, edit: false } : todo
          )
        : [
            ...state,
            {
              task: action.task,
              id: uuidv4(),
              complated: false,
              edit: false,
            },
          ];
    // _____________________ END OF ADD TODO ___________________________________

    // _____________________ REMOVE Todo _______________________________________
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    // _____________________ END OF REMOVE Todo ________________________________

    // _____________________ CHECK Todo __________________________________
    case "CHECK":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complated: !todo.complated } : todo
      );
    // _____________________END OF CHECK Todo __________________________________

    // _____________________END OF EDIT Todo ___________________________________
    case "EDIT":
      return state.map((todo) => {
        // ________________________________________________________
        if (todo.id === action.id && !todo.edit) {
          // --------------------------------------------------
          action.input.current.children[1].children[0].focus();
          // --------------------------------------------------
          action.setInput(todo.task);
          // --------------------------------------------------
          return { ...todo, edit: true };
          // ________________________________________________________
        } else if (todo.id === action.id && todo.edit) {
          // --------------------------------------------------
          action.setInput("");

          // --------------------------------------------------
          return { ...todo, edit: false };
          // ________________________________________________________
        } else if (todo.edit && todo.id !== action.id) {
          // --------------------------------------------------
          return { ...todo, edit: false };
          // --------------------------------------------------
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
// _____________________END OF EDIT Todo ___________________________________
