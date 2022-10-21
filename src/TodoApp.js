import React, { createRef } from "react";
import { Toolbar, Typography, Grid, AppBar, Paper } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useContext } from "react";
import { TodosContext } from "./contex/todos.context";
function TodoApp() {
  // ___________________ Varibales _______________________________________________

  const { todosState, foucsInput } = useContext(TodosContext);
  const { addTodo } = todosState;
  // ___________________ End Of Varibales ________________________________________

  return (
    <Paper
      style={{
        paddin: "0",
        margin: "0 ",
        height: "100vh",
        backgroundColor: "lightGray",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography>TODO OR NOT TO DO, That's the question</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} ref={foucsInput} />
          <TodoList />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
