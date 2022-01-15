import { CLEAR_MODAL, SET_MODAL } from "../types/modalTypes";

const modalReducer = (state = {status:false}, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {status:true, children:action.payload};
    case CLEAR_MODAL:
      return {status:false};
    default:
      return state;
  }
};

export default modalReducer;
