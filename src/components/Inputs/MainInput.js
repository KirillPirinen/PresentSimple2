import styles from "./Inputs.module.css"

export const MainInput = ({...rest}) => {
  return (
    <input className={styles.mainInput} {...rest}/>
  )
}
