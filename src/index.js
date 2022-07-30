import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import configureStore from "./store";
import "./index.css";
import App from "./App";
import { store } from "./store";
// import { createStore } from "redux";
// import { configureStore } from "redux";
// function todos(state = ["initial"], ation) {
//   switch (ation.type) {
//     case "ADD_TODO":
//       return state.concat([ation.text, ation.n]);
//     // case "ADD_MORE":
//     //   return state.
//     default:
//       return state;
//   }
// }
// const state = configureStore();

// const store = createStore(todos);
// store.dispatch({
//   type: "ADD_TODO",
//   text: "this is first",
//   n: 9,
// });

// console.log(store.getState());
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
