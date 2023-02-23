import { combineReducers, createStore } from "redux";
import { reducerInput } from "./reducerInput";
import { reducerListTodos } from "./reducerListTodos";

const rootReducer = combineReducers({
  listToDo: reducerListTodos,
  inputToDo: reducerInput,
});

export const store = createStore(rootReducer);
