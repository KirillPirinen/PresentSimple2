import {
  ALL_WISHES_PERSON, BIND_ALONE, CREATE_GROUP,
} from "../types/groupModalTypes";

export const wishesGroupAloneReducer = (state = [], action) => {
  
  const { type, payload } = action;

  switch (type) {
    case ALL_WISHES_PERSON:
      return payload;

    case BIND_ALONE: {
      const reloadedState = Object.assign({}, state)
      reloadedState.Wishes = reloadedState.Wishes.map(e => e.id == payload ? {...e, isBinded:true} : e)
      return reloadedState
    }

    case CREATE_GROUP:{
      const reloadedState = Object.assign({}, state)
      reloadedState.Wishes = reloadedState.Wishes.map(e => e.id == payload.wish_id ? {...e, isBinded:true, Group:payload} : e) 
      return reloadedState
    }
    
      default: return state;
  }
};
