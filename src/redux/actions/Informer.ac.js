import { SET_INFORMER, CLEAR_INFORMER } from "../types/informerTypes";

export const setInformer = (value) => ({
  type: SET_INFORMER,
  payload: value,
});

export const clearInformer = () => ({
  type: CLEAR_INFORMER
});

