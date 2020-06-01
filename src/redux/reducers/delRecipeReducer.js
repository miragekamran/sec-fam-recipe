const initialState = {
  isFetching: false,
  isAdding: false,
  isDeleteing: false,
};

export const delRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_RECIPES':
      return {
        ...state,
        isFetching: true,
      };
    case 'DELETING_RECIPES':
      return {
        ...state,
        isDeleteing: true,
      };
    case 'DELETING_SUCCESSFUL':
      return {
        ...state,
        isDeleteing: false,
      };
    default:
      return state;
  }
};
