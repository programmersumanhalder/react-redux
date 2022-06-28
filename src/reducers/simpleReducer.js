export default (state = 667, { type, payload }) => {
  switch (type) {
    case "SIMPLE_ACTION":
      return {
        result: payload,
      };
    default:
      return state;
  }
};
