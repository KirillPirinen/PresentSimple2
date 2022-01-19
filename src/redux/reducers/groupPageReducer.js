import { GET_GROUP_INFO } from "../types/groupPageTypes";

const groupPageReducer = (state = {}, action) => {
  switch (action.type) {

    case GET_GROUP_INFO: return action.payload

    default:
      return state;
  }
};

export default groupPageReducer;
