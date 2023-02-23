import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header.jsx";
import { Main } from "../components/Main/Main.jsx";
import { inputAddToDo } from "../store/reducerInput.jsx";
import { addToDo } from "../store/reducerListTodos.jsx";
import "./global/styles/global.css";

export function App() {
  const dispatch = useDispatch();

  const listToDo = useSelector((state) => state.listToDo);
  const inputToDo = useSelector((state) => state.inputToDo.textToDo);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(listToDo));
  }, [listToDo]);

  const handlerAddTodo = () => {
    if (inputToDo.trim()) dispatch(addToDo(inputToDo));
    dispatch(inputAddToDo(""));
  };

  return (
    <>
      <Header />
      <Main handlerAddTodo={handlerAddTodo} />
    </>
  );
}
