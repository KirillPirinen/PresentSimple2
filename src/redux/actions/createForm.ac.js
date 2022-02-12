import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";
import { SET_NEW_FORM } from "../types/createFormTypes";

export function setForm(value) {
  return {
    type: SET_NEW_FORM,
    payload: value,
  };
}

export const makeNewForm = (payload, navigate) => async (dispatch) => {
  const {status, data} = await customAxios.post(initPoints.createForm, payload)
  if(status === 200) {
    dispatch(setForm(data))
    navigate('/successCreated')
  }
};

export const deliverForm = (uuid, navigate) => async (dispatch) => {
  const {status} = await customAxios.get(initPoints.deliveryForm(uuid))
  if(status === 200) {
    navigate('/')
  }
};
