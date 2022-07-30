import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todos } from "./reducers/todoReducer";

// export default function configureStore() {
//   return createStore(rootReducer, applyMiddleware(thunk));
// }
// export default function configureStore(initialState={}) {
// 	return createStore(
// 		rootReducer,
// 		applyMiddleware(thunk)
// 	)
// }
const rootReducer = combineReducers({
  todos,
});
export const store = createStore(rootReducer);
