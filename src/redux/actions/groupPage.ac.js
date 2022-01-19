import customAxios from "../../axios/instance";
import initPoints from "../../config/endPoints";
import { GET_GROUP_INFO } from "../types/groupPageTypes";

export const getGroupInfo = (group_id, navigate) => async (dispatch) => {
    try {
      const {data, status} = await customAxios(initPoints.groupInfo(group_id))
      if(status === 200) dispatch({type: GET_GROUP_INFO, payload:data });
    } catch (err) {
      if(err.response.status === 303) navigate('/')
    }
};

