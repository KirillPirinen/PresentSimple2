import { DELETE_GROUP, EDIT_GROUP, GET_GROUP_INFO, LEAVE_GROUP } from "../types/groupPageTypes";
import produce from "immer"

const groupPageReducer = (state = null, action) => {
  switch (action.type) {

    case GET_GROUP_INFO: return action.payload

    case DELETE_GROUP: 
    case LEAVE_GROUP:return null

    case EDIT_GROUP: {
      return produce(state, draft=> {        
        return Object.assign(draft, action.payload)
      });
    }

    default:
      return state;
  }
};

export default groupPageReducer;
