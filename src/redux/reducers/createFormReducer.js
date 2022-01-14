import { SET_NEW_FORM } from "../types/createFormTypes";

export const createFormReducer = (state=false, action) => {
  switch (action.type) {

    case SET_NEW_FORM: {
      return action.payload
    }
  
    default: return state
  }
}
