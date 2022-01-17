import { BIND_PRESENT, GET_ALL_PRESENTS } from "../types/presentsTypes";

export const presentsReducer = (state=[], action) => {
  switch (action.type) {
    case GET_ALL_PRESENTS:
      return action.payload
    
    case BIND_PRESENT:
      const {rangeid, presentid} = action.payload;
      const result =  state.map(range => {
        if(rangeid === range.id) {
          const reloadedRange = {...range};
          reloadedRange.Presents = range.Presents.map(present => {
            if(presentid === present.id) return {...present, isBinded:true}
            else return present
          })
          return reloadedRange
        } else {
          return range;
        }
      })
      return result;

    default: return state
  }
}
