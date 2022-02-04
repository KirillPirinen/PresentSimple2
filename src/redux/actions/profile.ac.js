import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";

import {
  ADD_WISH, ALL_WISHES, DELETE_WISH, EDIT_WISH, WISH_IS_GIVEN, EDIT_ONLY_PHOTO, DELETE_FORM, UNBIND_PRESENT, GIVE_PRESENT, GIVE_WISH, UNBIND_WISH, EDIT_USER_DATA,
} from "../types/profileTypes"; 
import { setInformer } from "./Informer.ac";

import { clearModal } from "./modal.ac";
import { editUser } from "./User.ac";

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
    try {
      const {status, data} = await customAxios.put(initPoints.addWish, payload)
    if(status === 200) {
      dispatch({
        type: EDIT_WISH,
        payload:data,
      });
      return dispatch(clearModal())
    } else if (status === 206) {
      dispatch({
        type:EDIT_ONLY_PHOTO,
        payload:data
      })
      return dispatch(clearModal())
    }
    } catch (err) {
      if(err.response.status === 413) {
        dispatch(setInformer({error:'Максимальный размер файла 5мб'}))
      }
    }
}

export const deleteWish = id => async dispatch => {
    const {status} = await customAxios.delete(initPoints.deleteWish(id))
    if(status === 200) {
       dispatch({
        type: DELETE_WISH,
        payload: id,
      });
      return dispatch(clearModal())
    }
}

export const toggleStatusWish = id => async dispatch => {
    const {status} = await customAxios.patch(initPoints.toggleStatus(id))
    if(status === 200) {
      dispatch({
        type: WISH_IS_GIVEN,
        payload: id,
      });
      return dispatch(clearModal())
    }
}

export const deleteForm = id => async dispatch => {
  const {status} = await customAxios.delete(initPoints.deleteForm(id))
  if(status === 200) {
     dispatch({
      type: DELETE_FORM,
      payload: id,
    });
    return dispatch(clearModal())
  }
}

export const unBindPresent = id => async dispatch => {
  const {status} = await customAxios.patch(initPoints.unbindPresent(id))
  if(status === 200) {
     dispatch({
      type: UNBIND_PRESENT,
      payload: id,
    });
    return dispatch(clearModal())
  }
}

export const givePresent = id => async dispatch => {
  const {status} = await customAxios.patch(initPoints.givePresent(id))
  if(status === 200) {
     dispatch({
      type: GIVE_PRESENT,
      payload: id,
    });
    return dispatch(clearModal())
  }
}

export const giveWish = id => async dispatch => {
  const {status} = await customAxios.patch(initPoints.giveWish(id))
  if(status === 200) {
     dispatch({
      type: GIVE_WISH,
      payload: id,
    });
    return dispatch(clearModal())
  }
}

export const unBindWish = id => async dispatch => {
  const {status} = await customAxios.patch(initPoints.unbindWish(id))
  if(status === 200) {
     dispatch({
      type: UNBIND_WISH,
      payload: id,
    });
    return dispatch(clearModal())
  }
}

export const editUserData = payload => async dispatch => {
  const {status} = await customAxios.patch(initPoints.editUserData, payload)
  if(status === 200) {
    dispatch(editUser(payload))
    dispatch({type:EDIT_USER_DATA, payload})
  }
}

export const editUserAvatar = payload => async dispatch => {
  try{
    const {status, data} = await customAxios.patch(initPoints.editUserData, payload)
    if(status === 200) {
      dispatch(editUser(data))
      dispatch({type:EDIT_USER_DATA, payload:data})
    }
  } catch (err) {
    if(err.response.status === 413) {
      dispatch(setInformer({error:'Максимальный размер файла 5мб'}))
    }
  }
}
