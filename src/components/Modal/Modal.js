import { useSelector } from "react-redux"
import styles from "./Modal.module.scss"

export const Modal = () => {
  
  const {status:signal, data} = useSelector(state=>state.modal)

  return (
      <div className={signal ? `${styles.modal} ${styles.active}` : styles.modal}> 
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <div>Content</div>
      </div>
      <h2 className={styles.clickhere}>Кликни что-бы выйти</h2>
    </div>
    )
}
