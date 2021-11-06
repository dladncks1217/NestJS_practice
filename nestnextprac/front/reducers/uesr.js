const dummyUser = {
  username: "임우찬",
  isLoggedIn: false,
};

export const initialState = {
  username: null,
  isLoggedIn: false,
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const loginAction = {
  type: LOG_IN,
};

export const logoutAction = {
  type: LOG_OUT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        username: dummyUser.username,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
