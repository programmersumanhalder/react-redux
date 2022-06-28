import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import { testAction } from "./actions/testAction";
const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
  testAction: () => dispatch(testAction()),
});
const mapStateToProps = (state) => ({
  ...state,
});
class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  };
  testAction = (event) => {
    this.props.testAction();
  };
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction}>click</button>
        <button onClick={this.testAction}>test</button>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
