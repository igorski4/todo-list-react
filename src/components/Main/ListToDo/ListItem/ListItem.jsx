import React, { useState } from "react";
import clsx from "clsx";
import { Checkbox } from "../../../UI/Checkbox/Checkbox";
import { InputButton } from "../../../UI/InputButton/InputButton";
import { Input } from "../../../UI/Input/Input";
import cl from "./ListItem.module.css";

export const ListItem = ({ todo, handlerCheckbox, handlerDeleteTodo, handlerChangeTodo }) => {
  const [changeTodo, setChangeTodo] = useState(todo.text);

  return (
    <div className={cl.wrapper}>
      <Checkbox onChange={() => handlerCheckbox(todo)} />
      {todo.change ? (
        <>
          <Input onChange={(e) => setChangeTodo(e.target.value)} value={changeTodo} type="text" />
          <InputButton onClick={() => handlerChangeTodo({ ...todo, text: changeTodo })} type="button" value="✅" />
          <InputButton onClick={() => handlerChangeTodo(todo)} type="button" value="❎" />
        </>
      ) : (
        <>
          <p className={clsx(cl.text, { [cl.text_line_throught]: todo.condition })}>{todo.text}</p>
          <InputButton onClick={() => handlerChangeTodo(todo)} type="button" value="✏️" />
        </>
      )}

      <InputButton onClick={() => handlerDeleteTodo(todo)} type="button" value="❌" />
    </div>
  );
};
