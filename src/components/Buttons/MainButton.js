import styles from "./Buttons.module.scss"

export const MainButton = ({text, ...rest}) => {
  return (
    <button className={styles.mainButton} {...rest}>{text}</button>
  )
}
