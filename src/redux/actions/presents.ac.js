import customAxios from "../../axios/instance"
import initPoints from "../../config/endPoints"
import { BIND_PRESENT, GET_ALL_PRESENTS } from "../types/presentsTypes"
import { setInformer } from "./Informer.ac"
import { clearModal } from "./modal.ac"


export const getAllPresents = uuid => async dispatch => {
  const {status, data} = await customAxios.get(initPoints.getAllPresentsBindPresent(uuid))
  if(status === 200) dispatch({type:GET_ALL_PRESENTS, payload:data})
}

export const bindPresent = (uuid, id, rangeid) => async dispatch => {
  try {
    const {status} = await customAxios.patch(initPoints.getAllPresentsBindPresent(uuid), {id})
    if(status === 200) {
      dispatch({type:BIND_PRESENT, payload:{rangeid, presentid:id}})
      dispatch(clearModal())
    }

  } catch (err) {
    setInformer({error:'Что-то пошло не по плану.'})
  }
}
