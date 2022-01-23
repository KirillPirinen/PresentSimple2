import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";
import { CHAT_CLEAR } from "../types/chatTypes";
import { DELETE_GROUP, EDIT_GROUP, GET_GROUP_INFO, LEAVE_GROUP } from "../types/groupPageTypes";
import { clearModal } from "./modal.ac";

export const getGroupInfo = (group_id, navigate) => async (dispatch) => {
    try {
      const {data, status} = await customAxios.get(initPoints.groupInfo(group_id))
      if(status === 200) dispatch({type: GET_GROUP_INFO, payload:data });
    } catch (err) {
      navigate('/', {replace:true})
    }
};

export const deleteGroup = (id, navigate) => async dispatch => {
  const {status} = await customAxios.delete(initPoints.deleteGroup(id))
  if(status === 200) {
    navigate('/', {replace:true})
    dispatch(clearModal())
    dispatch({type:CHAT_CLEAR}) 
    return dispatch({type:DELETE_GROUP})
  }
}

export const editGroup = (id, payload) => async dispatch => {
  const {status} = await customAxios.patch(initPoints.editGroup(id), payload)
  if(status === 200) {
    dispatch({type:EDIT_GROUP, payload})
    dispatch(clearModal())
  }
}

export const leaveGroup = (id, navigate) => async dispatch => {
  const {status} = await customAxios.patch(initPoints.leaveGroup(id))
  if(status === 200) {
    navigate('/', {replace:true})
    dispatch(clearModal())
    dispatch({type:CHAT_CLEAR}) 
    return dispatch({type:LEAVE_GROUP})
  }
}

