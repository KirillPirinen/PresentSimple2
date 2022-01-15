import styles from "./Buttons.module.scss"

export const PlusButton = (props) => {
  return (
    <button type="button" className={styles.plus} {...props}></button>
  )
}
