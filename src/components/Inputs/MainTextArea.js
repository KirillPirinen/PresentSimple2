import styles from "./Inputs.module.scss"

export const MainTextArea = ({...rest}) => {
  return (
    <textarea className={styles.mainInput} {...rest}/>
  )
}
