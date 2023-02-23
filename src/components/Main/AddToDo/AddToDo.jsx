import React from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { inputAddToDo } from "../../../store/reducerInput";
import cl from "./AddToDo.module.css";

export const AddToDo = ({ handlerAddTodo }) => {
  const dispatch = useDispatch();

  const inputToDo = useSelector((state) => state.inputToDo.textToDo);

  return (
    <div className={cl.wrapper}>
      <Input
        value={inputToDo}
        onChange={(e) => {
          dispatch(inputAddToDo(e.target.value));
        }}
        type="text"
        placeholder="Введите задачу"
      />
      <Button onClick={() => handlerAddTodo()} className={cl.button_add_card}>
        Добавить
      </Button>
    </div>
  );
};
