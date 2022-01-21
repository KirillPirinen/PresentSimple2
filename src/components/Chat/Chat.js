import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { wsserver } from "../../config/endPoints";
import { recieveMessage } from "../../redux/actions/chat.ac";
import styles from "./Chat.module.scss";
import { ChatMessage } from "./ChatMessage";

export const Chat = () => {
  const dispatch = useDispatch()
  const {group_id} = useParams()
  const {isPaused, messages, online} = useSelector(state=>state.chat)
  const ws = useRef(null);
  console.log(online)
  const user = useSelector(state=>state.user)

  useEffect(() => {
      ws.current = new WebSocket(wsserver + `?group=${group_id}`);

      const wsCurrent = ws.current;

      return () => {
          wsCurrent.close();
      };

  }, []);

  useEffect(() => {
      if (!ws.current) return;

      ws.current.onmessage = e => {
          if (isPaused) return;
          dispatch(recieveMessage(e))
      };

  }, [isPaused]);

  const submitHandler = (e) => {
    e.preventDefault()
    ws.current.send(JSON.stringify(
      {type:'NEW_MESSAGE', payload:e.target.message.value}
      ))
  }
  
  return (
    <div className={styles.msger}>
    <div className={styles.head}></div>
    
    <div className={styles.chat}>
      {messages.map(message => <ChatMessage key={message.id} message={message} right={message.user_id === user.id}/>)}
    </div>

    <form onSubmit={submitHandler} className={styles.inputarea}>
      <input type="text" name="message" placeholder="Enter your message..."/>
      <button type="submit">Отправить</button>
    </form>
  </div>
  )
}
