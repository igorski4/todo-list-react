import React, { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Checkbox } from "../../../UI/Checkbox/Checkbox";
import { InputButton } from "../../../UI/InputButton/InputButton";
import { Input } from "../../../UI/Input/Input";
import { changeToDo, deleteToDo, toggleCheckbox } from "../../../../store/reducerListTodos";
import cl from "./ListItem.module.css";

export const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [changeTodo, setChangeTodo] = useState(todo.text);

  return (
    <div className={cl.wrapper}>
      <Checkbox checked={todo.completed} onChange={() => dispatch(toggleCheckbox(todo.key))} />
      {todo.change ? (
        <>
          <Input onChange={(e) => setChangeTodo(e.target.value)} value={changeTodo} type="text" />
          <InputButton onClick={() => dispatch(changeToDo({ ...todo, text: changeTodo }))} type="button" value="✅" />
          <InputButton onClick={() => dispatch(changeToDo(todo))} type="button" value="❎" />
        </>
      ) : (
        <>
          <p className={clsx(cl.text, { [cl.text_line_throught]: todo.completed })}>{todo.text}</p>
          <InputButton onClick={() => dispatch(changeToDo(todo))} type="button" value="✏️" />
        </>
      )}
      <InputButton onClick={() => dispatch(deleteToDo(todo.key))} type="button" value="❌" />
    </div>
  );
};
