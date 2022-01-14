import styles from "./Inputs.module.css"

export const MainTextArea = ({...rest}) => {
  return (
    <textarea className={styles.mainInput} {...rest}/>
  )
}
