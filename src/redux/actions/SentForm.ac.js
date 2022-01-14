import customAxios from "../../axios/instance"
import initPoints from "../../config/endPoints"
import { CHECK_FORM_UUID, CLEAR_SENTFORM, ERR_INTERNAL, FORM_DELIVERED, SEND_FILLING_FORM, SEND_FILLING_FORM_ERROR } from "../types/sentform.types"
import { disableLoader, enableLoader } from "./loader.ac"

export const CheckUUID = (uuid) => async (dispatch) => {
    const {status, data} = await customAxios.get(initPoints.checkAndGetForm(uuid))
    if(status === 200) 
    return dispatch({type:CHECK_FORM_UUID, payload:data})
}

export const SendForm = (uuid, data, history) => async (dispatch) => {
  dispatch(enableLoader())
  try {
    const response = await fetch(`http://localhost:3001/sentform/${uuid}`, {
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    const {status, message, count} = await response.json()

    switch (status) {
      case "success":
        dispatch({type:SEND_FILLING_FORM, payload:{status, message, count}})
        setTimeout(() => {
          history.push('/')
          //dispatch({type:MODAL_INFO_DEACTIVATE})
        }, 3000);
        break;
      case "empty":
        dispatch({type:SEND_FILLING_FORM_ERROR, payload:{status, message}})
        break;
    }
    dispatch(disableLoader())
  } catch (err) {
      dispatch({type:ERR_INTERNAL, payload:err})
  }
}

export const deliverForm = uuid => async dispatch => {
  try {
    const response = await fetch(`http://localhost:3001/sentform/delivery/${uuid}`)
    const data = await response.json()
    dispatch({type:FORM_DELIVERED, payload:data})
    dispatch({type:CLEAR_SENTFORM})
  } catch (err) {
    //dispatch(getError(err.message))
  }
}

