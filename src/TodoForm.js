import React, { forwardRef } from "react";
import { Paper, TextField } from "@material-ui/core";
import { useContext } from "react";
import { TodosContext } from "./contex/todos.context";
import { InputContext } from "./contex/input.context";

const TodoForm = forwardRef(({}, ref) => {
  // _________ Varibales _________________________________
  const { dispatch, todos } = useContext(TodosContext);
  const { reset, value, handleChange } = useContext(InputContext);
  const foucs = todos.some((todo) => todo.edit);
  const label = foucs ? "Edit Todo" : "Add New Todo";

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
          dispatch({ type: "ADD", task: value });
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
          autoFocus
          focused={foucs}
        />
      </form>
    </Paper>
  );
});

export default TodoForm;
