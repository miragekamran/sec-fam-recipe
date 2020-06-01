const initialState = {
  isLoading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    }
    default:
      return state;
  }
};
