import React from "react";
import { useSelector } from "react-redux";
import { ListItem } from "./ListItem/ListItem";
import cl from "./ListToDo.module.css";

export const ListToDo = () => {
  const listToDo = useSelector((state) => state.listToDo);

  return (
    <div className={cl.wrapper}>
      {listToDo.map((todo) => (
        <ListItem key={todo.key} todo={todo} />
      ))}
    </div>
  );
};
