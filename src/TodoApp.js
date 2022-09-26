import React, { createRef } from "react";
import useTodoState from "./hooks/useTodoState";
import { Toolbar, Typography, Grid, AppBar, Paper } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function TodoApp() {
  // ___________________ Varibales _______________________________________________
  const foucsInput = createRef();
  //  --------------------------------------------------------------------------
  const initialState = [
    {
      task: "Read The Secert Gaurdn",
      id: 12,
      edit: false,
      complated: false,
    },
  ];
  //  --------------------------------------------------------------------------
  const { todos, addTodo, removeTodo, editTodo, checkTodo } = useTodoState(
    initialState,
    foucsInput
  );
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
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
