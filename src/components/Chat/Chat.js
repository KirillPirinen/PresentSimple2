import styles from "./Chat.module.scss";
import { ChatMessage } from "./ChatMessage";

export const Chat = () => {
  return (
    <div className={styles.msger}>
    <div className={styles.head}></div>
    
    <div className={styles.chat}>
      <ChatMessage/>
      <ChatMessage/>
      <ChatMessage right={true}/>
      <ChatMessage right={true}/>
    </div>

    <form className={styles.inputarea}>
      <input type="text" placeholder="Enter your message..."/>
      <button type="button">Отправить</button>
    </form>
  </div>
  )
}
