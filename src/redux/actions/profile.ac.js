import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";

import {
  ADD_WISH,
  ALL_WISHES,
  DELETE_WISH,
  EDIT_WISH,
  WISH_IS_GIVEN,
} from "../types/profileTypes";
import { clearModal } from "./modal.ac";

export const getProfileData = () => async dispatch => {
    const {data, status} = await customAxios.get(initPoints.profileData)
    if(status === 200) {
      return dispatch({
        type: ALL_WISHES,
        payload: data,
      });
    }
}

export const addNewWish = payload => async dispatch => {
    const {data, status} = await customAxios.post(initPoints.addWish, payload)
    if(status === 200) {
      dispatch({
      type: ADD_WISH,
      payload: data,
    });
    return dispatch(clearModal())
  }
};


export const reloadWish = payload => async dispatch => {
    const {status, data} = await customAxios.put(initPoints.addWish, payload)
    console.log(data)
    // if (result.status == 200) {
    //   const editedWish = Object.fromEntries(wish);
    //   const editedWishWithPhoto = {
    //     ...editedWish,
    //     WishPhoto: { image: result.filePath },
    //   };
      // return dispatch({
      //   type: EDIT_WISH,
      //   payload: editedWishWithPhoto,
      // });
 //   }
 //return dispatch(clearModal())
}

export const deleteWish = id => async dispatch => {
    const {status} = await customAxios.delete(initPoints.deleteWish(id))
    if(status === 200) {
       dispatch({
        type: DELETE_WISH,
        payload: id,
      });
    }
  return dispatch(clearModal())
}

export function isGiven(id) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/wish/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: id,
    });
    console.log(id, "GET ID SUKANAH");
    return dispatch({
      type: WISH_IS_GIVEN,
      payload: id,
    });
  };
}
