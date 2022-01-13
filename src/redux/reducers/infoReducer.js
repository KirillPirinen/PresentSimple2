import {INFO, CLEAR_INFO} from "../types/informerTypes";

const infoReducer = (state = false, action) => {
  switch (action.type) {
    case INFO:
      return action.payload;
    case CLEAR_INFO:
      return null;
    default:
      return state;
  }
};

export default infoReducer;
