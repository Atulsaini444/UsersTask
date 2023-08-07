const initialState = {
  userInfo: [],
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return {
        ...state,
        userInfo: [...state.userInfo, action.payload],
      };
    default:
      return state;
  }
};