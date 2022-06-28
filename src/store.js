import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
// export default function configureStore(initialState={}) {
// 	return createStore(
// 		rootReducer,
// 		applyMiddleware(thunk)
// 	)
// }
