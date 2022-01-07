import styles from "./Buttons.module.scss"

export const MainButton = ({text, ...rest}) => {
  return (
    <button className={`${styles.button} ${styles.main}`} {...rest}>{text}</button>
  )
}
