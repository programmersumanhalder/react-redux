export default (state = 0, { type, payload }) => {
  switch (type) {
    case "TEST_ACTION":
      return {
        result: payload,
      };
    default:
      return state;
  }
};
