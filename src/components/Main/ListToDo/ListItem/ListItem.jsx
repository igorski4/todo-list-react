import React from "react";
import clsx from "clsx";
import { Checkbox } from "../../../UI/Checkbox/Checkbox";
import { InputButton } from "../../../UI/InputButton/InputButton";
import { Input } from "../../../UI/Input/Input";
import cl from "./ListItem.module.css";

export const ListItem = ({ todo, handlerCheckbox, handlerDeleteTodo }) => {
  return (
    <div className={cl.wrapper}>
      <Checkbox onChange={() => handlerCheckbox(todo)} />
      {todo.condition ? (
        <>
          <Input value={todo.text} type="text" />
          <InputButton type="button" value="✅" />
        </>
      ) : (
        <>
          <p className={clsx(cl.text, { [cl.text_line_throught]: todo.condition })}>{todo.text}</p>
          <InputButton type="button" value="✏️" />
        </>
      )}

      <InputButton onClick={() => handlerDeleteTodo(todo)} type="button" value="❌" />
    </div>
  );
};
