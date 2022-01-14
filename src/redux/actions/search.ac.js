import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";
import {SET_DATA, CLEAN_SEARCH_DATA} from "../types/searchTypes";

export const setData = (payload) => ({
  type: SET_DATA, payload
});

export const cleanSeachData = () => ({
  type: CLEAN_SEARCH_DATA
})

// export const getCheckedUser = (payload) => ({
//   type: ADD_USER, payload
// });

// export const getExampleForm = (payload) => ({
//   type: GET_EXAMPLE_FORM, payload
// });

// export const userOrFormNotFound = (payload) => {
//   return {type:USER_OR_FORM_NOTFOUND, payload}
// }

// export const clearCheckForm = () => ({type:CLEAR_CHECKFORM_STATE})

// export const setContacts = (contacts) => ({type:SET_CONTACTS, payload:contacts})

export const searchData = (payload) => async (dispatch) => {
    const {status, data} = await customAxios.post(initPoints.searchPersonOrForm, payload)
    if(status === 200) return dispatch(setData(data))
  };

// export const createForm = values => async dispatch => {
//     const {status, data} = await customFetch(dispatch, initPoints.createForm, {
//       method:"POST",
//       credentials:'include',
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(values)
//     })
//     if(status === 200 || data.id) {
//       dispatch({type:CREATE_URL_FORM, payload:data})
//     } else {
//       dispatch(userOrFormNotFound(data, values))
//     }
// }

