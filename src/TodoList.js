import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import { useContext } from "react";
import { TodosContext } from "./contex/todos.context";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
