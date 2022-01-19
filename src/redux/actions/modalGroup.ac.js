import { ALL_WISHES_PERSON, BIND_ALONE, CREATE_GROUP, JOIN_GROUP } from "../types/groupModalTypes";
import initPoints from "../../config/endPoints";
import customAxios from "../../axios/instance";
import { clearModal } from "./modal.ac";

export const getAllWishes = (user_id, navigate) => async (dispatch) => {
  try {
    const {data, status} = await customAxios(initPoints.getPersonWishes(user_id))
    if(status === 200) dispatch({type: ALL_WISHES_PERSON, payload:data });
  } catch (error) {
    if (error.response.status === 303) navigate('/profile')
  }
};

export const addAlone = wish_id => async dispatch => {
  const {status} = await customAxios.patch(initPoints.addAlone, {wish_id})
   if(status === 200) {
    dispatch({type:BIND_ALONE, payload:wish_id})
    return dispatch(clearModal())
   }
};

export const addGroup = (payload, wish_id) => async (dispatch) => {
 const {status, data} = await customAxios.post(initPoints.createGroup, {...payload, wish_id})
    if (status === 200) {
      dispatch({type:CREATE_GROUP, payload:data.group})
      return dispatch(clearModal())
    } 
};

export const joinGroup = wish_id => async dispatch => {
   const {status} = await customAxios.patch(initPoints.joinGroup, {wish_id})
    if (status === 200) {
      dispatch({type:JOIN_GROUP, payload:wish_id})
    }
    return dispatch(clearModal())
};
