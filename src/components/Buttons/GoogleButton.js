import styles from "./Buttons.module.scss"

export const GoogleButton = (props) => {
  return (
    <button type="button" className={`${styles.button} ${styles.google}`} {...props}>
      Войти с помощью Google
    </button>
  )
}
