import { CHAT_CLEAR, CHAT_CONNECT, CHAT_LEAVE, CHAT_ONLINE, NEW_MESSAGE, OPEN_CHAT, RECIEVE_MESSAGE } from "../types/chatTypes.js";

const chatReducer = (state = {isPaused:false, messages:[], online:[]}, action) => {

  switch (action.type) {

    case OPEN_CHAT:
      return {isPaused:false, messages:action.payload.messages, online:action.payload.online};
    
    case NEW_MESSAGE:
      return {...state, messages:[...state.messages, action.payload]};

    case CHAT_CONNECT: 
      return {...state, online:[...state.online, action.payload]}

    case CHAT_LEAVE: 
      return {...state, online:state.online.filter(clientid => clientid !== action.payload)}

    case CHAT_CLEAR: return {isPaused:false, messages:[], online:[]}
    
    default:
      return state;
  }
};

export default chatReducer;
