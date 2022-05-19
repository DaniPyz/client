const INITIAL_STATE = {
  items: []
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case "GET_TOPICS":

      return {
        ...state,
        items: action.prop
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