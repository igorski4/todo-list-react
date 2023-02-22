import React from "react";
import { Button } from "../../UI/Button/Button";
import cl from "./DeleteToDo.module.css";

export const DeleteToDo = ({ handlerDeleteReady, handlerDeleteAll }) => {
  return (
    <div className={cl.wrapper}>
      <Button onClick={() => handlerDeleteReady()} className={cl.button_delete_ready}>
        Удалить выполненные
      </Button>
      <Button onClick={() => handlerDeleteAll()} className={cl.button_delete_all}>
        Удалить все
      </Button>
    </div>
  );
};
