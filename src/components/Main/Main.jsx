import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { AddToDo } from "./AddToDo/AddToDo";
import { ListToDo } from "./ListToDo/ListToDo";
import { DeleteToDo } from "./DeleteToDo/DeleteToDo";
import cl from "./Main.module.css";

export const Main = ({ handlerAddTodo }) => {
  const listToDo = useSelector((state) => state.listToDo);

  return (
    <div className={clsx("container", cl.main)}>
      <AddToDo handlerAddTodo={handlerAddTodo} />
      {listToDo.length !== 0 && (
        <>
          <ListToDo />
          <DeleteToDo />
        </>
      )}
    </div>
  );
};
