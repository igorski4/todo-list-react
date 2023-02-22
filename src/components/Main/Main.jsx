import React from "react";
import clsx from "clsx";
import { AddToDo } from "./AddToDo/AddToDo";
import { ListToDo } from "./ListToDo/ListToDo";
import cl from "./Main.module.css";
import { DeleteToDo } from "./DeleteToDo/DeleteToDo";

export const Main = ({
  inputTodo,
  setInputTodo,
  listTodos,
  handlerCheckbox,
  handlerDeleteTodo,
  handlerDeleteReady,
  handlerDeleteAll,
  handlerAddTodo,
}) => {
  return (
    <div className={clsx("container", cl.main)}>
      <AddToDo inputTodo={inputTodo} setInputTodo={setInputTodo} handlerAddTodo={handlerAddTodo} />
      {listTodos.length ? (
        <>
          <ListToDo listTodos={listTodos} handlerCheckbox={handlerCheckbox} handlerDeleteTodo={handlerDeleteTodo} />
          <DeleteToDo handlerDeleteReady={handlerDeleteReady} handlerDeleteAll={handlerDeleteAll} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
