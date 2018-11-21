export const reducers = (state = {}, {type}) => {
  switch (type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1
      };
    case "DEC":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return {
        count: 0
      };
  }
};
