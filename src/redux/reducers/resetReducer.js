import { SET_INFORMER, CLEAR_INFORMER} from "../types/informerTypes.js";
import { CHECK_LINK, RESET_PASSWORD } from "../types/resetTypes.js";

const resetReducer = (state = null, action) => {
  switch (action.type) {

    case CHECK_LINK:
      return true;
      
    case RESET_PASSWORD:
      return null;

    default:
      return state;
  }
};

export default resetReducer;
