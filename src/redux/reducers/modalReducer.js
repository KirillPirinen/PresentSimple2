import { CLEAR_MODAL, SET_MODAL } from "../types/modalTypes";

const modalReducer = (state = {status:false, data:{}}, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {status:true, data:action.payload};
    case CLEAR_MODAL:
      return {status:false, data:{}};
    default:
      return state;
  }
};

export default modalReducer;
