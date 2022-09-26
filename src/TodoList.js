import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, editTodo, checkTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <TodoItem
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                checkTodo={checkTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
