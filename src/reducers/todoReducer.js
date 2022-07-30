import { ADD_TODOS, REMOVE_TODO } from "../action/action-types";

const initialState = ["suman", "rajon"];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return [...state, action.payload];
    default:
      return state;
  }
};
