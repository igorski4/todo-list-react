import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../UI/Button/Button";
import { deleteAllToDos, deleteReadyToDos } from "../../../store/reducerListTodos";
import cl from "./DeleteToDo.module.css";

export const DeleteToDo = () => {
  const dispatch = useDispatch();

  return (
    <div className={cl.wrapper}>
      <Button onClick={() => dispatch(deleteReadyToDos())} className={cl.button_delete_ready}>
        Удалить выполненные
      </Button>
      <Button onClick={() => dispatch(deleteAllToDos())} className={cl.button_delete_all}>
        Удалить все
      </Button>
    </div>
  );
};
