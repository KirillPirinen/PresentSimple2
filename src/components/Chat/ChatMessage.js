import styles from "./Chat.module.scss"; 

export const ChatMessage = ({message, right}) => {
  return (
    <div className={right ? styles.right : styles.left}>
      <div>
        <div className={styles.info}>
          <div className={styles.name}>Sajad</div>
          <div className={styles.time}>12:46</div>
        </div>
        <div>
          Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
        </div>
      </div>
    </div>
  )
}
