import {
  ALL_WISHES,
  ADD_WISH,
  EDIT_WISH,
  DELETE_WISH,
  WISH_IS_GIVEN,
  EDIT_ONLY_PHOTO,
  DELETE_FORM,
  UNBIND_PRESENT,
  GIVE_PRESENT,
} from "../types/profileTypes";

import produce from "immer"

function profileReducer(state = {}, action) {

  switch (action.type) {
    case ALL_WISHES: {
      return action.payload;
    }

    case ADD_WISH: {
      return produce(state, draft=> {
        draft.Wishlist.Wishes.push(action.payload)
      });
    }

    case EDIT_WISH: {
      return produce(state, draft=> {
        const index = draft.Wishlist.Wishes.findIndex(el=>{
          return el.id === action.payload.id
        })
        draft.Wishlist.Wishes[index] = action.payload
      });
    }
    
    case EDIT_ONLY_PHOTO: {
      return produce(state, draft=> {
        const index = draft.Wishlist.Wishes.findIndex(el=>{
          return el.id === action.payload.wish_id
        })
        draft.Wishlist.Wishes[index].WishPhoto = action.payload
      });
    }

    case DELETE_WISH: {
     return produce(state, draft=> {
        const index = draft.Wishlist.Wishes.findIndex(el=>{
          return el.id === action.payload.id
        })
        draft.Wishlist.Wishes.splice(index, 1)
      });
    }

    case WISH_IS_GIVEN: {
      return produce(state, draft=> {
        const index = draft.Wishlist.Wishes.findIndex(el=>{
          return el.id === action.payload
        })
        draft.Wishlist.Wishes[index].isGiven = !draft.Wishlist.Wishes[index].isGiven
        draft.Wishlist.Wishes[index].isBinded = false
        draft.Wishlist.Wishes[index].Group = null
      });
    }

    case DELETE_FORM: {
      return produce(state, draft=> {
         const index = draft.Forms.findIndex(el=>{
           return el.id === action.payload
         })
         draft.Forms.splice(index, 1)
       });
     }

     case UNBIND_PRESENT: 
     case GIVE_PRESENT: {
      return produce(state, draft=> {
         const index = draft.Presents.findIndex(el=>{
           return el.id === action.payload
         })
         draft.Presents.splice(index, 1)
       });
     }

    default:
      return state;
  }
}

export default profileReducer;
