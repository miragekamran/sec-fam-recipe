import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
} from '../actions/getRecipesActions';

const initialState = {
  isLoading: false,
  recipes: [
    {
      id: '',
      title: '',
      source: '',
      ingredients: '',
      instructions: '',
      category: '',
      photo: '',
    },
  ],
  error: null,
};

export const getRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload,
      };
    case FETCH_RECIPES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
