const AppReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "DELETE_ITEM": {
      let filteredData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        data: filteredData,
      };
    }

    case "INCREMENT_ITEM_QUANTITY": {
      let tempArray = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: tempArray,
      };
    }

    case "DECREMENT_ITEM_QUANTITY": {
      let tempArray = state.data.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity - 1 >= 0) {
            return { ...item, quantity: item.quantity - 1 };
          } else return { ...item, quantity: 0 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: tempArray,
      };
    }

    default:
      throw new Error(`No action found of type [ ${action.type} ]`);
  }
};

export default AppReducer;
