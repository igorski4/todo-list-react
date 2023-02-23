const defaultState = JSON.parse(localStorage.getItem("task")) ?? [];

const ADD_TODO = "ADD_TODO";
const DELETE_ALL_TODOS = "DELETE_ALL_TODOS";
const DELETE_READY_TODOS = "DELETE_READY_TODOS";
const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

export const reducerListTodos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { key: Date.now(), completed: false, text: action.payload, change: false }];
    case DELETE_ALL_TODOS:
      return [];
    case DELETE_READY_TODOS:
      return state.filter((todo) => todo.completed === false);
    case TOGGLE_CHECKBOX:
      return state.map((todo) => {
        if (todo.key === action.payload) todo.completed = !todo.completed;
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.key !== action.payload);
    case CHANGE_TODO:
      return state
        .map((tempTodo) => {
          if (tempTodo.key === action.payload.key) {
            tempTodo.text = action.payload.text;
            tempTodo.change = !tempTodo.change;
          }
          return tempTodo;
        })
        .filter((tempTodo) => tempTodo.text);
    default:
      return state;
  }
};

export const addToDo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteAllToDos = () => ({
  type: DELETE_ALL_TODOS,
});

export const deleteReadyToDos = () => ({
  type: DELETE_READY_TODOS,
});

export const toggleCheckbox = (payload) => ({
  type: TOGGLE_CHECKBOX,
  payload,
});

export const deleteToDo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const changeToDo = (payload) => ({
  type: CHANGE_TODO,
  payload,
});
