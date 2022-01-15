import customAxios from "../../axios/instance"
import initPoints from "../../config/endPoints"
import { GET_ALL_PRESENTS } from "../types/presentsTypes"


export const getAllPresents = uuid => async dispatch => {
  const {status, data} = await customAxios.get(initPoints.getAllPresents(uuid))
  if(status === 200) dispatch({type:GET_ALL_PRESENTS, payload:data})
}

// export const bindPresent = (uuid, id) => async dispatch => {
//   try {
//     const response = await fetch(`http://localhost:3001/presents/${uuid}`, {
//       method:"PATCH",
//       credentials:"include",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify({id})
//     })
//     const data = await response.json()
//     dispatch(getError(data))
//     dispatch(getAllPresents(uuid))
//   } catch (err) {
//     dispatch(getError(err))
//   }
// }
