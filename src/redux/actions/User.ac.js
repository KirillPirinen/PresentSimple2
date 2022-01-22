import {DELETE_USER, SET_USER} from "../types/userTypes";
import initPoints from "../../config/endPoints";
import customAxios from "../../axios/instance";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signUp = (payload, navigate) => async (dispatch) => {
  try {
    console.log(payload)
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

// export const checkEmail = (email) => async (dispatch) => {
//   const {status, data} = await customFetch(dispatch, initPoints.checkEmail, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({ email: email }),
//   });
//   if (status === 200) {
//     dispatch(getError(data.message));
//   }
// };

// export const resetPasswordAction =
//   (payload, history, reset_password_id) => async (dispatch) => {
//     dispatch(enableLoader());
//     const {status, data} = await customFetch(dispatch, initPoints.resetPassword + String(reset_password_id),
//       {method: "POST",
//        headers: {"Content-Type": "application/json"},
//        credentials: "include",
//        body: JSON.stringify(payload)
//       }
//     );
//     if (status === 200) {
//       dispatch(getInfo(data.info));
//     }
//   };

  