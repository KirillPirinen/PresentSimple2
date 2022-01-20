import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { wsserver } from "../../config/endPoints";
import styles from "./Chat.module.scss";
import { ChatMessage } from "./ChatMessage";

export const Chat = () => {

  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);
  const [messages, setMessages] = useState([])
  const user = useSelector(state=>state.user)

  useEffect(() => {
      ws.current = new WebSocket(wsserver);
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");

      const wsCurrent = ws.current;

      return () => {
          wsCurrent.close();
      };
  }, []);

  useEffect(() => {
      if (!ws.current) return;

      ws.current.onmessage = e => {
          if (isPaused) return;
          const message = JSON.parse(e.data);
          setMessages(prev => [...prev, message.payload])
      };

  }, [isPaused]);

  const submitHandler = (e) => {
    e.preventDefault()
    ws.current.send(JSON.stringify({type:'NEW_MESSAGE', payload:e.target.message.value}))
  }
  console.log(messages)
  return (
    <div className={styles.msger}>
    <div className={styles.head}></div>
    
    <div className={styles.chat}>
      {messages.map(message => <ChatMessage message={message} right={message.id === user.id}/>)}
    </div>

    <form onSubmit={submitHandler} className={styles.inputarea}>
      <input type="text" name="message" placeholder="Enter your message..."/>
      <button type="submit">Отправить</button>
    </form>
  </div>
  )
}
