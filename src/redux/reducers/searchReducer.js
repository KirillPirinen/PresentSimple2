import { SET_DATA, CLEAN_SEARCH_DATA} from "../types/searchTypes";

export const searchReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DATA:
      return payload;
    
    case CLEAN_SEARCH_DATA:
      return {}

    // case USER_OR_FORM_NOTFOUND:
    //   return {status:false, ...payload}

    // case ADD_USER:
    //   return { status: true, recipient: payload };

    // case CREATE_URL_FORM:
    //   return {status:true, form:payload}
    
    // case CLEAR_CHECKFORM_STATE: return {}
    
    // case SET_CONTACTS: return {contacts:payload}

    default:
      return state;
  }
};

// export const getExampleFormReducer = (state = false, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case GET_EXAMPLE_FORM:
//       return payload;
//     case SHOW_ANSWER_FROM_BACK:
//       return payload;
//     default:
//       return state;
//   }
// };
