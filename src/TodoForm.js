import React, { forwardRef } from "react";
import { Paper, TextField } from "@material-ui/core";
import useStatedInput from "./hooks/useStatedInput";
import { useContext } from "react";
import { TodosContext } from "./contex/todos.context";
const TodoForm = forwardRef(({}, ref) => {
  // _________ Varibales _________________________________
  const { todosState, inputState } = useContext(TodosContext);
  const { addTodo } = todosState;
  const [value, handleChange, reset, showValue, label, setLabel] = inputState;
  // const [value, handleChange, reset] = useStatedInput();
  // _________ End Of Varibales _________________________________
  return (
    <Paper
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value, setLabel);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          fullWidth
          margin="normal"
          label={label}
          ref={ref}
          autoFocus={true}
        />
      </form>
    </Paper>
  );
});

export default TodoForm;
