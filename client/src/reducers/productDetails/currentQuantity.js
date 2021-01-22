const changeQuantityReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      return action.currentQuantity;
    default:
      return state;
  }
};
export default changeQuantityReducer;