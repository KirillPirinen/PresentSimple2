import {
  ALL_WISHES_PERSON, BIND_ALONE, CREATE_GROUP,
} from "../types/groupModalTypes";
import produce from "immer"

export const wishesGroupAloneReducer = (state = [], action) => {
  
  const { type, payload } = action;

  switch (type) {
    case ALL_WISHES_PERSON:
      return payload;

    case BIND_ALONE: {
      return produce(state, draft=> {
        const index = draft.Wishes.findIndex(el=>{
          return el.id === action.payload
        })
        draft.Wishes[index].isBinded = true;
      });
    }

    case CREATE_GROUP:{
      const reloadedState = Object.assign({}, state)
      reloadedState.Wishes = reloadedState.Wishes.map(e => e.id == payload.wish_id ? {...e, isBinded:true, Group:payload} : e) 
      return reloadedState
    }
    
      default: return state;
  }
};
