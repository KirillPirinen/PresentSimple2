import styles from "./Chat.module.scss"; 

export const ChatMessage = ({message, right}) => {
  return (
    <div className={right ? styles.right : styles.left}>
      <div>
        <div className={styles.info}>
          <div className={styles.name}>{message.name}</div>
          <div className={styles.time}>12:46</div>
        </div>
        <div>
          {message.text}
        </div>
      </div>
    </div>
  )
}
