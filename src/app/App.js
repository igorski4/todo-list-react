import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header.jsx";
import { Main } from "../components/Main/Main.jsx";
import "./global/styles/global.css";

function App() {
  const [listTodos, setListTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  useEffect(() => {
    setListTodos(JSON.parse(localStorage.getItem("task")) ?? []);
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(listTodos));
  }, [listTodos]);

  const handlerCheckbox = (todo) => {
    setListTodos(
      listTodos.map((tempTodo) => {
        if (tempTodo.id === todo.id) tempTodo.condition = !tempTodo.condition;
        return tempTodo;
      })
    );
  };

  const handlerDeleteTodo = (todo) => {
    setListTodos(listTodos.filter((tempTodo) => tempTodo.id !== todo.id));
  };

  const handlerDeleteReady = () => {
    setListTodos(listTodos.filter((todo) => !todo.condition));
  };

  const handlerDeleteAll = () => {
    setListTodos([]);
  };

  const handlerAddTodo = () => {
    if (inputTodo.trim())
      setListTodos([
        ...listTodos,
        { key: Date.now(), id: Date.now(), condition: false, text: inputTodo, change: false },
      ]);
    setInputTodo("");
  };

  const handlerChangeTodo = (todo) => {
    setListTodos(
      listTodos
        .map((tempTodo) => {
          if (tempTodo.id === todo.id) {
            tempTodo.text = todo.text;
            tempTodo.change = !tempTodo.change;
          }
          return tempTodo;
        })
        .filter((tempTodo) => tempTodo.text)
    );
  };

  console.log(listTodos);

  return (
    <>
      <Header />
      <Main
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        listTodos={listTodos}
        setListTodos={setListTodos}
        handlerCheckbox={handlerCheckbox}
        handlerDeleteTodo={handlerDeleteTodo}
        handlerDeleteReady={handlerDeleteReady}
        handlerDeleteAll={handlerDeleteAll}
        handlerAddTodo={handlerAddTodo}
        handlerChangeTodo={handlerChangeTodo}
      />
    </>
  );
}

export default App;
