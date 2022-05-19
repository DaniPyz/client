const INITIAL_STATE = {
  username: null,
  id: null,
  email: null,
  roles: [],
  isLogin: false
};

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case "USER_SIGNIN":

      return {

        ...state,
        ...action.payload


      };

    // case "USER_SINGOUT":

    //   return {
    //     ...state,
    //     count: state.count - 1,

    //   };

    default: return state;

  }

};

export default userReducer;