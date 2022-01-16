import styles from "./Buttons.module.scss"

export const RefuseButton = ({text, ...rest}) => {
  return (
    <button className={styles.refuse} {...rest}>{text}</button>
  )
}
