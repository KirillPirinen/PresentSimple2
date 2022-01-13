import { SET_INFORMER, CLEAR_INFORMER} from "../types/informerTypes.js";

const informerReducer = (state = {status:null}, action) => {
  switch (action.type) {
    case SET_INFORMER:
      return {status:true, ...action.payload};
    case CLEAR_INFORMER:
      return {status:null};
    default:
      return state;
  }
};

export default informerReducer;
