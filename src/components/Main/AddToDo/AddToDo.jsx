import React from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import cl from "./AddToDo.module.css";

export const AddToDo = ({ inputTodo, setInputTodo, handlerAddTodo }) => {
  return (
    <div className={cl.wrapper}>
      <Input
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        type="text"
        placeholder="Введите задачу"
      />
      <Button onClick={() => handlerAddTodo()} className={cl.button_add_card}>
        Добавить
      </Button>
    </div>
  );
};
