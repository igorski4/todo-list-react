import React from "react";
import { ListItem } from "./ListItem/ListItem";
import cl from "./ListToDo.module.css";

export const ListToDo = ({ listTodos, handlerCheckbox, handlerDeleteTodo, handlerChangeTodo }) => {
  return (
    <div className={cl.wrapper}>
      {listTodos.map((todo) => (
        <ListItem
          key={todo.key}
          todo={todo}
          handlerCheckbox={handlerCheckbox}
          handlerDeleteTodo={handlerDeleteTodo}
          handlerChangeTodo={handlerChangeTodo}
        />
      ))}
    </div>
  );
};
