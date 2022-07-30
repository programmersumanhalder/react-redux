import React from "react";
import { connect } from "react-redux";
const App = (todos) => {
  // console.log(todos.todos.map((t) => console.log(t)));
  return <div>hello</div>;
};

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(App);
