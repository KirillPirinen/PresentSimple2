import { CLEAR_MODAL, SET_MODAL } from "../types/modalTypes";

export const setModal = (payload) => {
  return {type:SET_MODAL, payload}
}

export const clearModal = () => {
  return {type:CLEAR_MODAL}
}
