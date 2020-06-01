export const initialState = {
  recipes: [],
  isLoading: false,
  isAdding: false,
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_RECIPES':
      return { ...state, isLoading: true };
    case 'FETCHING_RECIPES_SUCCESSFUL':
      return { ...state, isLoading: false, recipes: action.payload };
    case 'ADD_TO_DASHBOARD':
      return {
        ...state,
        isAdding: true,
      };
    case 'ADD_TO_DASHBOARD_SUCCESSFUL':
      return {
        ...state,
        isAdding: false,
      };

    default:
      return state;
  }
};
