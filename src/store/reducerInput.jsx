const defaultState = { textToDo: "" };

const INPUT_ADD_TODO = "INPUT_ADD_TODO";
export const reducerInput = (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_ADD_TODO:
      return { textToDo: action.payload };

    default:
      return state;
  }
};

export const inputAddToDo = (payload) => ({
  type: INPUT_ADD_TODO,
  payload,
});
