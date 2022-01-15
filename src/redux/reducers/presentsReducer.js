import { GET_ALL_PRESENTS } from "../types/presentsTypes";

export const presentsReducer = (state=[], action) => {
  switch (action.type) {
    case GET_ALL_PRESENTS:
      return action.payload
  
    default: return state
  }
}
