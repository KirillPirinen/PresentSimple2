import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";
import { CHECK_LINK, RESET_PASSWORD } from "../types/resetTypes";

export const checkLink =
  (uuid, redirect) => async (dispatch) => {
    try {
      const {status} = await customAxios.get(initPoints.checkLink(uuid))

      if(status === 200) {
        dispatch({type:CHECK_LINK})
      }

    } catch (err) {
      redirect()
    }
  };

export const resetPassword = (payload, redirect) => async dispatch => {
  const {status} = await customAxios.post(initPoints.resetPassword, payload)
  if(status === 200) {
    dispatch({type:RESET_PASSWORD})
    redirect()
  }
}
