import {DELETE_USER, EDIT_USER, SET_USER} from "../types/userTypes";
import initPoints from "../../config/endPoints";
import customAxios from "../../axios/instance";
import { clearModal } from "./modal.ac";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const editUser = (payload) => {
  const res = {};
  ['name', 'lname', 'avatar'].forEach(field => {
    if(payload.hasOwnProperty(field)) res[field] = payload[field]
  })
  return {type:EDIT_USER, payload:res}
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signUp = (payload, navigate) => async (dispatch) => {
  try {
    const {status, data} = await customAxios.post(initPoints.signUp, payload)
    if(status === 200) {
      dispatch(setUser(data))
      navigate('/')
    }
  } catch (err) {
    if(err.response.status === 403) {
      navigate('/auth/login', {replace:true})
    }
  }
  
};

export const signIn = (payload, navigate) => async (dispatch) => {
  const {status, data} = await customAxios.post(initPoints.signIn, payload)
  if(status === 200) {
    dispatch(setUser(data))
    navigate()
  }
};

export const googleIn = (payload, navigate) => async (dispatch) => {
  const {status, data} = await customAxios.post(initPoints.googleIn, payload)
  if(status === 200) {
    dispatch(setUser(data))
    navigate()
  }
};

export const signOut = () => async (dispatch) => {
  const {status} = await customAxios.get(initPoints.signOut);
  if (status === 200) dispatch(deleteUser());
};

export const checkAuth = () => async (dispatch) => {
  const {data, status} = await customAxios.get(initPoints.checkAuth);
  if(status === 200) dispatch(setUser(data));
};

export const checkEmail = payload => async (dispatch) => {
  try{
    await customAxios.post(initPoints.checkEmail, payload);
    dispatch(clearModal())
  } catch {
    dispatch(clearModal())
  } 
};
  