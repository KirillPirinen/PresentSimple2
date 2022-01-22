import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { wsserver } from "../../config/endPoints";
import styles from "./Chat.module.scss";
import { ChatMessage } from "./ChatMessage";

export const Chat = () => {
  const dispatch = useDispatch()
  const {group_id} = useParams()
  const {isPaused, messages, online} = useSelector(state=>state.chat)
  const user = useSelector(state=>state.user)
  const div = useRef(null)

  useEffect(() => {
      dispatch({type:'WS_CONNECT', host:wsserver + `?group=${group_id}`})
      return () => dispatch({type:'WS_DISCONNECT'})
  }, []);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({type:'WS_SEND', payload:e.target.message.value})
    e.target.message.value = '';
  }

  useLayoutEffect(() => {
    div.current.scrollTop = div.current.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.msger}>
    <div className={styles.head}></div>
    
    <div ref={div} className={styles.chat}>
      {messages.length ? 
       messages.map((message, index, arr) => {
         return (
          <ChatMessage 
          key={message.id} 
          message={message} 
          right={message.user_id === user.id}
          />
         )
       }) : 
      <div className={styles.nomessage}>Сообщений нет</div>}
    </div>

    <form onSubmit={submitHandler} className={styles.inputarea}>
      <input type="text" name="message" placeholder="Enter your message..."/>
      <button type="submit">Отправить</button>
    </form>
  </div>
  )
}
