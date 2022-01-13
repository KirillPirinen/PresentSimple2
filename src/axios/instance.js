import { host } from "../config/endPoints";
import axios from 'axios';
import { setInformer } from "../redux/actions/Informer.ac";
import store from "../redux/store";
import { deleteUser } from "../redux/actions/User.ac";

const {dispatch} = store

const customAxios = axios.create({
  baseURL: host,
  withCredentials:true
});

customAxios.interceptors.response.use(function (response) {
  
  if (response.data.hasOwnProperty("info")) {
    setTimeout(()=>{
      dispatch(setInformer({info:response.data.info}))
    })
  }

  return response;
}, function (error) {
  
  if(error.response.status === 401) dispatch(deleteUser())
  
  if(error.response.data.hasOwnProperty("error")) {
    setTimeout(()=>{
      dispatch(setInformer({error:error.response.data.error}))
    })
  } else if (error.response.data.hasOwnProperty("info")) {
    setTimeout(()=>{
      dispatch(setInformer({info:error.response.data.info}))
    })
  }

  return Promise.reject(error);
});

export default customAxios;
