import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Edit } from "@material-ui/icons";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
} from "@material-ui/core";

function TodoItem({ todo, removeTodo, editTodo, checkTodo, inputState }) {
  const [a, b, c, showValue, label, setLabel] = inputState;
  // _______________ Event Handlers __________________________
  const handleDelete = () => removeTodo(todo.id);
  //   ___________________________________________
  const handleEdit = () => editTodo(todo.id, showValue, setLabel);
  //   ___________________________________________
  const handleCheck = () => checkTodo(todo.id);
  //   _____________ End Of Event Handlers ___________________
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={todo.complated} onClick={handleCheck} />
      <ListItemText
        style={{ textDecoration: todo.complated ? "line-through" : "none" }}
      >
        {todo.task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={handleEdit}>
          <Edit style={{ color: todo.edit ? "#2e55c9" : "gray" }} />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Delete style={{ color: "#2e55c9" }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
