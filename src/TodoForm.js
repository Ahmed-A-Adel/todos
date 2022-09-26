import React, { forwardRef } from "react";
import { Paper, TextField } from "@material-ui/core";
import useStatedInput from "./hooks/useStatedInput";

const TodoForm = forwardRef(({ addTodo }, ref) => {
  const [value, handleChange, reset] = useStatedInput();
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
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          fullWidth
          margin="normal"
          label="Add a new todo"
          ref={ref}
          autoFocus
        />
      </form>
    </Paper>
  );
});

export default TodoForm;
