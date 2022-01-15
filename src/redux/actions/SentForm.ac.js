import customAxios from "../../axios/instance"
import initPoints from "../../config/endPoints"
import { CHECK_FORM_UUID, CLEAR_SENTFORM, ERR_INTERNAL, FORM_DELIVERED, SEND_FILLING_FORM, SEND_FILLING_FORM_ERROR } from "../types/sentform.types"
import { disableLoader, enableLoader } from "./loader.ac"

export const CheckUUID = (uuid, navigate) => async (dispatch) => {
  try{

    const {status, data} = await customAxios.get(initPoints.checkAndFillForm(uuid))
    if(status === 200) 
    return dispatch({type:CHECK_FORM_UUID, payload:data})

  } catch (err){
    if(err.response.status === 410) {
      window.localStorage.removeItem(uuid)
      navigate('/')
    }
  }
}

export const SendForm = (uuid, payload, navigate) => async (dispatch) => {
      const {status} = await customAxios.patch(initPoints.checkAndFillForm(uuid), payload)
      if(status === 200) {
        window.localStorage.removeItem(uuid)
        navigate('/')
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

