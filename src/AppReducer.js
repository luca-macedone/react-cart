const AppReducer = (state, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      throw new Error(`No action found of type [ ${action.type} ]`);
  }
};

export default AppReducer;
