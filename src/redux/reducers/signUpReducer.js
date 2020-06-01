const initialState = {
  signingUp: false,
  error: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNINGUP_START':
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case 'SIGNINGUP_SUCCESS':
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case 'SIGNINGUP_FAILED':
      return {
        ...state,
        signingUp: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
