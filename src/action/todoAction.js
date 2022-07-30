import { ADD_TODO, REMOVE_TODO } from "./action-types";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
}
// Note: we can call function body with object without curly braces only arrow function
