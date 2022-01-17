import styles from "./Buttons.module.scss"

export const SimpleButton = ({text, ...rest}) => {
  return (
    <button className={styles.simple} {...rest}>{text}</button>
  )
}
