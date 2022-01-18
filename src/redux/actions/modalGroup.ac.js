import { ALL_WISHES_PERSON, BIND_ALONE, CREATE_GROUP } from "../types/groupModalTypes";
import initPoints from "../../config/endPoints";
import customAxios from "../../axios/instance";
import { clearModal } from "./modal.ac";

export const getAllWishes = (user_id) => async (dispatch) => {
  const {data, status} = await customAxios(initPoints.getPersonWishes(user_id))
    if(status === 200) dispatch({type: ALL_WISHES_PERSON, payload:data });
};

export const addAlone = wish_id => async dispatch => {
  const {status} = await customAxios.patch(initPoints.addAlone, {wish_id})
   if(status === 200) {
    dispatch({type:BIND_ALONE, payload:wish_id})
    return dispatch(clearModal())
   }
};

// export const addGroup = (maxusers, telegram, wish_id) => async (dispatch) => {
//  const {status, data} = await customFetch(dispatch, initPoints.createGroup, {
//    method:"POST",
//    credentials:'include',
//    headers:{"Content-Type":"application/json"},
//    body:JSON.stringify( {
//     maxusers,telegram,wish_id
//   })
//  })
//     if (status === 200) {
//       dispatch({type:CREATE_GROUP, payload:data.group})
//     } 
// };

// export const joinGroup = (wish_id) => async (dispatch) => {
//    const {status, data} = await customFetch(dispatch, initPoints.joinGroup, {
//    method:"PATCH",
//    credentials:'include',
//    headers:{"Content-Type":"application/json"},
//    body:JSON.stringify({wish_id})
//     })

//     if (status === 200) {
//       //dispatch(getProgressbar(response.data?.wishes?.Wishes));
//     } else if (status === 202) {
//       //dispatch(getProgressbar(response.data.groups));
//     } else if (status === 201) {
//       //dispatch(getProgressbar(response.data?.wishes?.Wishes));
//     }
// };
