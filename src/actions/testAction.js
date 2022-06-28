export const testAction = () => (dispatch) => {
  dispatch({
    type: "Test_ACTION",
    payload: 5,
  });
};
